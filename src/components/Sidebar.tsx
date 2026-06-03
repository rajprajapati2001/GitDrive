/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from "react";
import {
  HardDrive,
  Trash2,
  FolderPlus,
  UploadCloud,
  Database,
  CloudLightning,
  AlertTriangle,
  Github,
  TrendingUp,
} from "lucide-react";

interface Props {
  view: "drive" | "trash";
  setView: (v: "drive" | "trash") => void;
  totalFiles: number;
  totalFolders: number;
  storageUsedMB: string;
  onOpenCredentials: () => void;
  isConfigured: boolean;
  onUploadSelect: (file: File) => void;
  onCreateFolderSelect: () => void;
  uploadProgress: number | null;
}

export default function Sidebar({
  view,
  setView,
  totalFiles,
  totalFolders,
  storageUsedMB,
  onOpenCredentials,
  isConfigured,
  onUploadSelect,
  onCreateFolderSelect,
  uploadProgress,
}: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onUploadSelect(e.target.files[0]);
    }
  };

  // Safe percentage calculation based on a custom soft account limit of 100MB for the demo, or similar
  const maxLimit = 100; // 100MB
  const numericalUsed = parseFloat(storageUsedMB) || 0;
  const progressPercent = Math.min((numericalUsed / maxLimit) * 100, 100);

  return (
    <aside className="w-64 bg-white border-r border-slate-200 shrink-0 h-full flex flex-col p-4 select-none">
      {/* Upload & Create actions */}
      <div className="space-y-2 mb-6">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          id="sidebar-file-upload"
        />
        <button
          onClick={() => fileInputRef.current?.click()}
          disabled={!isConfigured || uploadProgress !== null}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-2.5 px-4 flex items-center justify-center gap-2 shadow-md shadow-blue-100 disabled:opacity-50 cursor-pointer transition-all text-sm font-semibold"
        >
          {uploadProgress !== null ? (
            <span className="flex items-center gap-2 animate-pulse">
              <UploadCloud className="w-4 h-4 animate-bounce" /> {uploadProgress}%
            </span>
          ) : (
            <>
              <UploadCloud className="w-4 h-4" />
              Upload Files
            </>
          )}
        </button>

        <button
          onClick={onCreateFolderSelect}
          disabled={!isConfigured}
          className="w-full py-2.5 px-4 text-xs font-semibold text-slate-700 hover:text-slate-800 bg-slate-50 hover:bg-slate-100/90 disabled:opacity-50 border border-slate-200 rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-colors"
        >
          <FolderPlus className="w-4 h-4 text-slate-500" />
          Create Folder
        </button>
      </div>

      {/* Main navigation categories */}
      <nav className="space-y-1 flex-1">
        <button
          onClick={() => setView("drive")}
          className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer text-left ${
            view === "drive"
              ? "bg-blue-50 text-blue-700 font-semibold"
              : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
          }`}
        >
          <HardDrive className="w-4 h-4" />
          <span>All Files</span>
        </button>

        <button
          onClick={() => setView("trash")}
          className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer text-left ${
            view === "trash"
              ? "bg-red-50 text-red-700 font-semibold"
              : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
          }`}
        >
          <Trash2 className="w-4 h-4" />
          <span>Trash Bin</span>
        </button>
      </nav>

      {/* Connection status display */}
      <div className="mt-4 p-3 rounded-xl border border-slate-200 bg-slate-50/50">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Database Binding</span>
          <div className="flex items-center gap-1">
            <span
              className={`w-1.5 h-1.5 rounded-full ${isConfigured ? "bg-emerald-500 animate-pulse" : "bg-amber-500"}`}
            ></span>
            <span className="text-[10px] font-medium text-slate-500">{isConfigured ? "Live Sync" : "No Config"}</span>
          </div>
        </div>

        <button
          onClick={onOpenCredentials}
          className="w-full py-1.5 bg-white border border-slate-200 hover:bg-slate-50 text-xs font-semibold text-slate-700 rounded-lg flex items-center justify-center gap-1.5 cursor-pointer shadow-sm transition-colors"
        >
          <Database className="w-3.5 h-3.5 text-slate-450" />
          {isConfigured ? "Manage Github" : "Setup Storage"}
        </button>
      </div>

      {/* Storage and Statistics block */}
      <div className="mt-4 pt-4 border-t border-slate-200">
        <div className="mb-2 flex justify-between text-xs font-medium">
          <span className="text-slate-500">Storage Used</span>
          <span className="text-slate-900 font-semibold">{storageUsedMB} MB / {maxLimit} MB</span>
        </div>
        <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
          <div
            className={`h-full transition-all duration-500 rounded-full ${
              progressPercent > 80 ? "bg-red-500" : progressPercent > 50 ? "bg-amber-500" : "bg-blue-600"
            }`}
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <p className="text-[10px] text-slate-400 mt-2 leading-relaxed">
          Managed by GitDrive Private Repository
        </p>

        <div className="grid grid-cols-2 gap-2 mt-3 text-center">
          <div className="p-1.5 bg-slate-50/75 border border-slate-150 rounded-lg">
            <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Folders</div>
            <div className="text-xs font-bold text-slate-800">{totalFolders}</div>
          </div>
          <div className="p-1.5 bg-slate-50/75 border border-slate-150 rounded-lg">
            <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Files</div>
            <div className="text-xs font-bold text-slate-800">{totalFiles}</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
