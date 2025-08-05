"use client";
import { useState } from "react";

export default function StoragePage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Storage</h2>
      </div>
      {/* Tabs */}
      <div className="tabs tabs-bordered">
        <button
          className={`tab tab-bordered ${
            activeTab === "overview" ? "tab-active" : ""
          }`}
          onClick={() => setActiveTab("overview")}
        >
          Overview
        </button>
        <button
          className={`tab tab-bordered ${
            activeTab === "disks" ? "tab-active" : ""
          }`}
          onClick={() => setActiveTab("disks")}
        >
          Disks
        </button>
        <button
          className={`tab tab-bordered ${
            activeTab === "pools" ? "tab-active" : ""
          }`}
          onClick={() => setActiveTab("pools")}
        >
          Storage Pools
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "overview" && (
        <div className="card bg-base-200">
          <div className="card-body">
            <h2 className="card-title">Storage Overview</h2>
            <div className="text-center py-8 text-base-content/70">
              Storage overview coming soon...
            </div>
          </div>
        </div>
      )}

      {activeTab === "disks" && (
        <div className="card bg-base-200">
          <div className="card-body">
            <h2 className="card-title">Physical Disks</h2>
            <div className="text-center py-8 text-base-content/70">
              Disk management coming soon...
            </div>
          </div>
        </div>
      )}

      {activeTab === "pools" && (
        <div className="card bg-base-200">
          <div className="card-body">
            <h2 className="card-title">Storage Pools</h2>
            <div className="text-center py-8 text-base-content/70">
              Storage pool management coming soon...
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
