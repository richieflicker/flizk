import { Calendar, Users, Activity, DollarSign, Clock, CheckCircle2 } from "lucide-react";

export function DashboardMockup() {
  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <div className="bg-white rounded-[20px] shadow-[var(--shadow-soft)] overflow-hidden">
        {/* Dashboard Header */}
        <div className="bg-gradient-to-r from-brand-leaf to-brand-teal px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">D</span>
            </div>
            <div>
              <h3 className="text-white font-semibold">DentXOne Dashboard</h3>
              <p className="text-white/80 text-sm">SmileCare Dental Clinic</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white/20 rounded-full"></div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-6 bg-brand-surface">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-2xl p-4">
              <div className="flex items-center justify-between mb-2">
                <Users className="w-5 h-5 text-brand-leaf" />
                <span className="text-xs text-brand-leaf">+12%</span>
              </div>
              <p className="text-2xl font-bold text-brand-ink">324</p>
              <p className="text-xs text-brand-muted">Total Patients</p>
            </div>

            <div className="bg-white rounded-2xl p-4">
              <div className="flex items-center justify-between mb-2">
                <Calendar className="w-5 h-5 text-brand-teal" />
                <span className="text-xs text-brand-leaf">+8%</span>
              </div>
              <p className="text-2xl font-bold text-brand-ink">48</p>
              <p className="text-xs text-brand-muted">Today's Appointments</p>
            </div>

            <div className="bg-white rounded-2xl p-4">
              <div className="flex items-center justify-between mb-2">
                <Activity className="w-5 h-5 text-brand-leaf" />
                <span className="text-xs text-brand-leaf">+23%</span>
              </div>
              <p className="text-2xl font-bold text-brand-ink">156</p>
              <p className="text-xs text-brand-muted">Active Treatments</p>
            </div>

            <div className="bg-white rounded-2xl p-4">
              <div className="flex items-center justify-between mb-2">
                <DollarSign className="w-5 h-5 text-brand-leaf" />
                <span className="text-xs text-brand-leaf">+18%</span>
              </div>
              <p className="text-2xl font-bold text-brand-ink">₹2.4L</p>
              <p className="text-xs text-brand-muted">Monthly Revenue</p>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Appointments Calendar */}
            <div className="bg-white rounded-2xl p-5">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-brand-ink">Today's Schedule</h4>
                <Calendar className="w-5 h-5 text-brand-muted" />
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-brand-leaf-tint rounded-xl">
                  <Clock className="w-4 h-4 text-brand-leaf" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-brand-ink">Priya Sharma</p>
                    <p className="text-xs text-brand-muted">Root Canal - 10:00 AM</p>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-brand-leaf" />
                </div>
                <div className="flex items-center space-x-3 p-3 bg-brand-teal-tint rounded-xl">
                  <Clock className="w-4 h-4 text-brand-teal" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-brand-ink">Rajesh Kumar</p>
                    <p className="text-xs text-brand-muted">Teeth Cleaning - 11:30 AM</p>
                  </div>
                  <div className="w-4 h-4 rounded-full border-2 border-gray-300"></div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-brand-leaf-tint rounded-xl">
                  <Clock className="w-4 h-4 text-brand-leaf" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-brand-ink">Anjali Patel</p>
                    <p className="text-xs text-brand-muted">Consultation - 2:00 PM</p>
                  </div>
                  <div className="w-4 h-4 rounded-full border-2 border-gray-300"></div>
                </div>
              </div>
            </div>

            {/* Patient Management */}
            <div className="bg-white rounded-2xl p-5">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-brand-ink">Recent Patients</h4>
                <Users className="w-5 h-5 text-brand-muted" />
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-brand-surface rounded-xl">
                  <div className="w-10 h-10 bg-gradient-to-br from-brand-leaf to-brand-teal rounded-full flex items-center justify-center text-white text-sm font-medium">
                    PS
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-brand-ink">Priya Sharma</p>
                    <p className="text-xs text-brand-muted">Last visit: 2 days ago</p>
                  </div>
                  <Activity className="w-4 h-4 text-brand-leaf" />
                </div>
                <div className="flex items-center space-x-3 p-3 bg-brand-surface rounded-xl">
                  <div className="w-10 h-10 bg-gradient-to-br from-brand-teal to-brand-leaf rounded-full flex items-center justify-center text-white text-sm font-medium">
                    RK
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-brand-ink">Rajesh Kumar</p>
                    <p className="text-xs text-brand-muted">Last visit: 1 week ago</p>
                  </div>
                  <Activity className="w-4 h-4 text-brand-leaf" />
                </div>
                <div className="flex items-center space-x-3 p-3 bg-brand-surface rounded-xl">
                  <div className="w-10 h-10 bg-gradient-to-br from-brand-leaf to-brand-teal rounded-full flex items-center justify-center text-white text-sm font-medium">
                    AP
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-brand-ink">Anjali Patel</p>
                    <p className="text-xs text-brand-muted">New patient</p>
                  </div>
                  <Activity className="w-4 h-4 text-brand-muted" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
