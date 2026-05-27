import { Calendar, Users, Activity, DollarSign, Clock, CheckCircle2 } from "lucide-react";

export function DashboardMockup() {
  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
        {/* Dashboard Header */}
        <div className="bg-gradient-to-r from-[#1E4ED8] to-[#14B8A6] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">D</span>
            </div>
            <div>
              <h3 className="text-white font-semibold">Dentxone Dashboard</h3>
              <p className="text-white/80 text-sm">SmileCare Dental Clinic</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white/20 rounded-full"></div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-6 bg-gray-50">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <Users className="w-5 h-5 text-[#1E4ED8]" />
                <span className="text-xs text-[#22C55E]">+12%</span>
              </div>
              <p className="text-2xl font-bold text-gray-900">324</p>
              <p className="text-xs text-gray-600">Total Patients</p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <Calendar className="w-5 h-5 text-[#14B8A6]" />
                <span className="text-xs text-[#22C55E]">+8%</span>
              </div>
              <p className="text-2xl font-bold text-gray-900">48</p>
              <p className="text-xs text-gray-600">Today's Appointments</p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <Activity className="w-5 h-5 text-[#22C55E]" />
                <span className="text-xs text-[#22C55E]">+23%</span>
              </div>
              <p className="text-2xl font-bold text-gray-900">156</p>
              <p className="text-xs text-gray-600">Active Treatments</p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <DollarSign className="w-5 h-5 text-[#1E4ED8]" />
                <span className="text-xs text-[#22C55E]">+18%</span>
              </div>
              <p className="text-2xl font-bold text-gray-900">₹2.4L</p>
              <p className="text-xs text-gray-600">Monthly Revenue</p>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Appointments Calendar */}
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-gray-900">Today's Schedule</h4>
                <Calendar className="w-5 h-5 text-gray-400" />
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                  <Clock className="w-4 h-4 text-[#1E4ED8]" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">Priya Sharma</p>
                    <p className="text-xs text-gray-600">Root Canal - 10:00 AM</p>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                </div>
                <div className="flex items-center space-x-3 p-3 bg-teal-50 rounded-lg">
                  <Clock className="w-4 h-4 text-[#14B8A6]" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">Rajesh Kumar</p>
                    <p className="text-xs text-gray-600">Teeth Cleaning - 11:30 AM</p>
                  </div>
                  <div className="w-4 h-4 rounded-full border-2 border-gray-300"></div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                  <Clock className="w-4 h-4 text-[#22C55E]" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">Anjali Patel</p>
                    <p className="text-xs text-gray-600">Consultation - 2:00 PM</p>
                  </div>
                  <div className="w-4 h-4 rounded-full border-2 border-gray-300"></div>
                </div>
              </div>
            </div>

            {/* Patient Management */}
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-gray-900">Recent Patients</h4>
                <Users className="w-5 h-5 text-gray-400" />
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                    PS
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">Priya Sharma</p>
                    <p className="text-xs text-gray-600">Last visit: 2 days ago</p>
                  </div>
                  <Activity className="w-4 h-4 text-[#22C55E]" />
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                    RK
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">Rajesh Kumar</p>
                    <p className="text-xs text-gray-600">Last visit: 1 week ago</p>
                  </div>
                  <Activity className="w-4 h-4 text-[#22C55E]" />
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                    AP
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">Anjali Patel</p>
                    <p className="text-xs text-gray-600">New patient</p>
                  </div>
                  <Activity className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
