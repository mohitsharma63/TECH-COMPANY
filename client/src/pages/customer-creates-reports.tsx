
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, FileText, Download, Calendar, BarChart3, Package, Users, TrendingUp, TrendingDown } from "lucide-react";
import { Link } from "wouter";

interface ReportData {
  totalCustomers: number;
  activeCrates: number;
  returnedCrates: number;
  overdueCrates: number;
  totalRevenue: number;
  monthlyGrowth: number;
}

interface CustomerReport {
  customerName: string;
  totalCrates: number;
  activeCrates: number;
  returnedCrates: number;
  overdueCrates: number;
  totalAmount: number;
  lastActivity: string;
}

export default function CustomerCratesReportsPage() {
  const [reportType, setReportType] = useState("summary");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  // Mock report data
  const reportData: ReportData = {
    totalCustomers: 156,
    activeCrates: 245,
    returnedCrates: 189,
    overdueCrates: 23,
    totalRevenue: 125000,
    monthlyGrowth: 12.5
  };

  const customerReports: CustomerReport[] = [
    {
      customerName: "राजेश कुमार",
      totalCrates: 25,
      activeCrates: 5,
      returnedCrates: 18,
      overdueCrates: 2,
      totalAmount: 15000,
      lastActivity: "2024-01-20"
    },
    {
      customerName: "प्रिया शर्मा",
      totalCrates: 18,
      activeCrates: 3,
      returnedCrates: 15,
      overdueCrates: 0,
      totalAmount: 12000,
      lastActivity: "2024-01-18"
    },
    {
      customerName: "अमित पटेल",
      totalCrates: 32,
      activeCrates: 10,
      returnedCrates: 20,
      overdueCrates: 2,
      totalAmount: 18500,
      lastActivity: "2024-01-22"
    },
    {
      customerName: "सुनीता सिंह",
      totalCrates: 12,
      activeCrates: 2,
      returnedCrates: 10,
      overdueCrates: 0,
      totalAmount: 8000,
      lastActivity: "2024-01-15"
    },
    {
      customerName: "विकास अग्रवाल",
      totalCrates: 28,
      activeCrates: 7,
      returnedCrates: 19,
      overdueCrates: 2,
      totalAmount: 16500,
      lastActivity: "2024-01-21"
    }
  ];

  const handleExportReport = () => {
    // Mock export functionality
    const dataStr = JSON.stringify(reportType === 'summary' ? reportData : customerReports, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `customer-crates-report-${reportType}-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
  };

  const StatCard = ({ title, value, subtitle, icon: Icon, color }: { 
    title: string; 
    value: string | number; 
    subtitle?: string; 
    icon: any; 
    color: string; 
  }) => (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
            <p className={`text-2xl font-bold ${color}`}>{value}</p>
            {subtitle && (
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{subtitle}</p>
            )}
          </div>
          <Icon className={`h-8 w-8 ${color}`} />
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-background">
      {/* Header */}
      <header className="bg-white dark:bg-card shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4">
              <Link href="/customer-crates">
                <Button variant="outline" size="sm" className="flex items-center space-x-2">
                  <ArrowLeft className="h-4 w-4" />
                  <span>वापस</span>
                </Button>
              </Link>
              <div className="bg-purple-500 text-white p-3 rounded-full">
                <FileText className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">ग्राहक क्रेट्स रिपोर्ट</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">Customer Crates Report</p>
              </div>
            </div>
            <Button onClick={handleExportReport} className="bg-purple-500 hover:bg-purple-600 text-white flex items-center space-x-2">
              <Download className="h-4 w-4" />
              <span>रिपोर्ट डाउनलोड करें</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="py-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <Label htmlFor="reportType" className="text-base font-medium">
                  रिपोर्ट का प्रकार
                </Label>
                <Select value={reportType} onValueChange={setReportType}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="रिपोर्ट का प्रकार चुनें" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="summary">सारांश रिपोर्ट</SelectItem>
                    <SelectItem value="detailed">विस्तृत ग्राहक रिपोर्ट</SelectItem>
                    <SelectItem value="monthly">मासिक रिपोर्ट</SelectItem>
                    <SelectItem value="overdue">देर से वापसी रिपोर्ट</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="dateFrom" className="text-base font-medium">
                  प्रारंभिक तारीख
                </Label>
                <Input
                  id="dateFrom"
                  type="date"
                  value={dateFrom}
                  onChange={(e) => setDateFrom(e.target.value)}
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="dateTo" className="text-base font-medium">
                  अंतिम तारीख
                </Label>
                <Input
                  id="dateTo"
                  type="date"
                  value={dateTo}
                  onChange={(e) => setDateTo(e.target.value)}
                  className="mt-2"
                />
              </div>
              <div className="flex items-end">
                <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  रिपोर्ट जेनरेट करें
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Summary Statistics */}
        {reportType === "summary" && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <StatCard
                title="कुल ग्राहक"
                value={reportData.totalCustomers}
                icon={Users}
                color="text-blue-600"
              />
              <StatCard
                title="सक्रिय क्रेट्स"
                value={reportData.activeCrates}
                icon={Package}
                color="text-green-600"
              />
              <StatCard
                title="वापस मिले क्रेट्स"
                value={reportData.returnedCrates}
                icon={BarChart3}
                color="text-purple-600"
              />
              <StatCard
                title="देर से क्रेट्स"
                value={reportData.overdueCrates}
                icon={TrendingDown}
                color="text-red-600"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <StatCard
                title="कुल राजस्व"
                value={`₹${reportData.totalRevenue.toLocaleString('hi-IN')}`}
                subtitle="इस महीने"
                icon={TrendingUp}
                color="text-green-600"
              />
              <StatCard
                title="मासिक वृद्धि"
                value={`${reportData.monthlyGrowth}%`}
                subtitle="पिछले महीने से"
                icon={TrendingUp}
                color="text-blue-600"
              />
            </div>
          </>
        )}

        {/* Detailed Customer Report */}
        {reportType === "detailed" && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                विस्तृत ग्राहक रिपोर्ट
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium">ग्राहक का नाम</th>
                      <th className="text-left py-3 px-4 font-medium">कुल क्रेट्स</th>
                      <th className="text-left py-3 px-4 font-medium">सक्रिय</th>
                      <th className="text-left py-3 px-4 font-medium">वापस मिले</th>
                      <th className="text-left py-3 px-4 font-medium">देर से</th>
                      <th className="text-left py-3 px-4 font-medium">कुल राशि</th>
                      <th className="text-left py-3 px-4 font-medium">अंतिम गतिविधि</th>
                    </tr>
                  </thead>
                  <tbody>
                    {customerReports.map((customer, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50 dark:hover:bg-gray-800">
                        <td className="py-3 px-4 font-medium">{customer.customerName}</td>
                        <td className="py-3 px-4">{customer.totalCrates}</td>
                        <td className="py-3 px-4">
                          <Badge className="bg-green-100 text-green-800">
                            {customer.activeCrates}
                          </Badge>
                        </td>
                        <td className="py-3 px-4">
                          <Badge className="bg-blue-100 text-blue-800">
                            {customer.returnedCrates}
                          </Badge>
                        </td>
                        <td className="py-3 px-4">
                          <Badge className={`${customer.overdueCrates > 0 ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'}`}>
                            {customer.overdueCrates}
                          </Badge>
                        </td>
                        <td className="py-3 px-4 font-medium">₹{customer.totalAmount.toLocaleString('hi-IN')}</td>
                        <td className="py-3 px-4 text-gray-600">
                          {new Date(customer.lastActivity).toLocaleDateString('hi-IN')}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Monthly Report */}
        {reportType === "monthly" && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                मासिक प्रदर्शन रिपोर्ट
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-green-50 dark:bg-green-950 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-2">इस महीने</h3>
                  <p className="text-3xl font-bold text-green-600">245</p>
                  <p className="text-sm text-green-600">नए क्रेट्स दिए गए</p>
                </div>
                <div className="text-center p-6 bg-blue-50 dark:bg-blue-950 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">वापसी</h3>
                  <p className="text-3xl font-bold text-blue-600">189</p>
                  <p className="text-sm text-blue-600">क्रेट्स वापस मिले</p>
                </div>
                <div className="text-center p-6 bg-purple-50 dark:bg-purple-950 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-200 mb-2">राजस्व</h3>
                  <p className="text-3xl font-bold text-purple-600">₹1,25,000</p>
                  <p className="text-sm text-purple-600">कुल कमाई</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Overdue Report */}
        {reportType === "overdue" && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-red-600">
                <TrendingDown className="h-5 w-5 mr-2" />
                देर से वापसी रिपोर्ट
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {customerReports.filter(c => c.overdueCrates > 0).map((customer, index) => (
                  <div key={index} className="p-4 border border-red-200 bg-red-50 dark:bg-red-950 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-red-800 dark:text-red-200">{customer.customerName}</h4>
                        <p className="text-sm text-red-600 dark:text-red-300">देर से: {customer.overdueCrates} क्रेट्स</p>
                        <p className="text-sm text-red-600 dark:text-red-300">अंतिम गतिविधि: {new Date(customer.lastActivity).toLocaleDateString('hi-IN')}</p>
                      </div>
                      <Badge className="bg-red-100 text-red-800">
                        {customer.overdueCrates} देर से
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

      </main>
    </div>
  );
}
