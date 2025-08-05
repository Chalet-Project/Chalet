"use client"
import { useQuery } from "@tanstack/react-query";
import { trpc } from "@/utils/trpc";
import { Activity, Server, HardDrive, Cpu } from "lucide-react";
import { useState } from "react";

export default function Dashboard() {
  const healthCheck = useQuery(trpc.healthCheck.queryOptions());
  const [activeTab, setActiveTab] = useState("overview");
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </div>
      
      {/* Tabs */}
      <div className="tabs tabs-bordered">
        <button 
          className={`tab tab-bordered ${activeTab === "overview" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("overview")}
        >
          Overview
        </button>
        <button 
          className={`tab tab-bordered ${activeTab === "resources" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("resources")}
        >
          Resources
        </button>
        <button 
          className={`tab tab-bordered ${activeTab === "activities" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("activities")}
        >
          Activities
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "overview" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="stat bg-base-200 rounded-box">
              <div className="stat-figure text-primary">
                <Activity className="w-8 h-8" />
              </div>
              <div className="stat-title">API Status</div>
              <div className="stat-value text-sm">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-3 h-3 rounded-full ${healthCheck.data ? "bg-success" : "bg-error"}`}
                  />
                  <span>
                    {healthCheck.isLoading
                      ? "Checking..."
                      : healthCheck.data
                        ? "Connected"
                        : "Disconnected"}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="stat bg-base-200 rounded-box">
              <div className="stat-figure text-secondary">
                <Server className="w-8 h-8" />
              </div>
              <div className="stat-title">Virtual Machines</div>
              <div className="stat-value">0</div>
              <div className="stat-desc">No VMs running</div>
            </div>
            
            <div className="stat bg-base-200 rounded-box">
              <div className="stat-figure text-accent">
                <HardDrive className="w-8 h-8" />
              </div>
              <div className="stat-title">Storage</div>
              <div className="stat-value">0%</div>
              <div className="stat-desc">Usage</div>
            </div>
            
            <div className="stat bg-base-200 rounded-box">
              <div className="stat-figure text-info">
                <Cpu className="w-8 h-8" />
              </div>
              <div className="stat-title">CPU Load</div>
              <div className="stat-value">0%</div>
              <div className="stat-desc">Current load</div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="card bg-base-200">
                <div className="card-body">
                  <h2 className="card-title">Proxmox Cluster Overview</h2>
                  <div className="text-center py-8 text-base-content/70">
                    Proxmox integration coming soon...
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="card bg-base-200">
                <div className="card-body">
                  <h2 className="card-title">Recent Activities</h2>
                  <div className="text-base-content/70">
                    No recent activities
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "resources" && (
        <div className="space-y-6">
          <div className="card bg-base-200">
            <div className="card-body">
              <h2 className="card-title">Resource Usage</h2>
              <div className="text-center py-8 text-base-content/70">
                Resource monitoring coming soon...
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "activities" && (
        <div className="space-y-6">
          <div className="card bg-base-200">
            <div className="card-body">
              <h2 className="card-title">System Activities</h2>
              <div className="text-center py-8 text-base-content/70">
                Activity logs coming soon...
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
