"use client";
import { useState } from "react";

export default function VirtualMachinesPage() {
  const [activeTab, setActiveTab] = useState("list");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Virtual Machines</h1>
        <button className="btn btn-primary">Create VM</button>
      </div>

      {/* Tabs */}
      <div className="tabs tabs-bordered">
        <button
          className={`tab tab-bordered ${
            activeTab === "list" ? "tab-active" : ""
          }`}
          onClick={() => setActiveTab("list")}
        >
          VM List
        </button>
        <button
          className={`tab tab-bordered ${
            activeTab === "templates" ? "tab-active" : ""
          }`}
          onClick={() => setActiveTab("templates")}
        >
          Templates
        </button>
        <button
          className={`tab tab-bordered ${
            activeTab === "snapshots" ? "tab-active" : ""
          }`}
          onClick={() => setActiveTab("snapshots")}
        >
          Snapshots
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "list" && (
        <div className="card bg-base-200">
          <div className="card-body">
            <h2 className="card-title">Virtual Machines</h2>
            <div className="text-center py-8 text-base-content/70">
              No virtual machines found
            </div>
          </div>
        </div>
      )}

      {activeTab === "templates" && (
        <div className="card bg-base-200">
          <div className="card-body">
            <h2 className="card-title">VM Templates</h2>
            <div className="text-center py-8 text-base-content/70">
              No templates available
            </div>
          </div>
        </div>
      )}

      {activeTab === "snapshots" && (
        <div className="card bg-base-200">
          <div className="card-body">
            <h2 className="card-title">VM Snapshots</h2>
            <div className="text-center py-8 text-base-content/70">
              No snapshots found
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
