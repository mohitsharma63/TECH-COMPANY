
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Search, Filter, Package, Phone, MapPin, Calendar, Edit, Trash2 } from "lucide-react";
import { Link } from "wouter";

interface CustomerCrate {
  id: string;
  customerName: string;
  customerPhone: string;
  customerAddress: string;
  crateType: string;
  quantity: number;
  assignedDate: string;
  returnDate?: string;
  status: "active" | "returned" | "overdue";
  notes?: string;
}

export default function CustomerCratesListPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  // Mock data - in real app this would come from API
  const customerCrates: CustomerCrate[] = [
    {
      id: "1",
      customerName: "राजेश कुमार",
      customerPhone: "9876543210",
      customerAddress: "123 मेन स्ट्रीट, नई दिल्ली",
      crateType: "large",
      quantity: 5,
      assignedDate: "2024-01-15",
      returnDate: "2024-02-15",
      status: "active",
      notes: "अच्छी स्थिति में"
    },
    {
      id: "2",
      customerName: "प्रिया शर्मा",
      customerPhone: "8765432109",
      customerAddress: "456 पार्क रोड, मुंबई",
      crateType: "medium",
      quantity: 3,
      assignedDate: "2024-01-10",
      returnDate: "2024-01-25",
      status: "overdue",
      notes: "जल्दी वापसी की आवश्यकता"
    },
    {
      id: "3",
      customerName: "अमित पटेल",
      customerPhone: "7654321098",
      customerAddress: "789 गार्डन स्ट्रीट, पुणे",
      crateType: "small",
      quantity: 10,
      assignedDate: "2024-01-05",
      returnDate: "2024-01-20",
      status: "returned",
      notes: "सफलतापूर्वक वापस मिला"
    },
    {
      id: "4",
      customerName: "सुनीता सिंह",
      customerPhone: "6543210987",
      customerAddress: "321 रिवर व्यू, बंगलौर",
      crateType: "xl",
      quantity: 2,
      assignedDate: "2024-01-20",
      returnDate: "2024-02-20",
      status: "active",
    },
    {
      id: "5",
      customerName: "विकास अग्रवाल",
      customerPhone: "5432109876",
      customerAddress: "654 हिल स्टेशन, चेन्नई",
      crateType: "medium",
      quantity: 7,
      assignedDate: "2024-01-12",
      returnDate: "2024-01-30",
      status: "overdue",
      notes: "फोन नहीं उठा रहे"
    }
  ];

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "active":
        return "सक्रिय";
      case "returned":
        return "वापस मिला";
      case "overdue":
        return "देर से";
      default:
        return status;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "returned":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "overdue":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getCrateTypeLabel = (type: string) => {
    switch (type) {
      case "small":
        return "छोटा";
      case "medium":
        return "मध्यम";
      case "large":
        return "बड़ा";
      case "xl":
        return "एक्स्ट्रा लार्ज";
      default:
        return type;
    }
  };

  const filteredCrates = customerCrates.filter(crate => {
    const matchesSearch = crate.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         crate.customerPhone.includes(searchTerm) ||
                         crate.customerAddress.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "all" || crate.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

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
              <div className="bg-blue-500 text-white p-3 rounded-full">
                <Package className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">ग्राहक क्रेट्स की सूची</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">Customer Crates List</p>
              </div>
            </div>
            <Link href="/customer-crates/add">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                नया जोड़ें
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="py-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    placeholder="ग्राहक का नाम, फोन नंबर या पता खोजें..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="w-full md:w-64">
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger>
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="स्थिति के अनुसार फिल्टर करें" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">सभी स्थितियां</SelectItem>
                    <SelectItem value="active">सक्रिय</SelectItem>
                    <SelectItem value="returned">वापस मिला</SelectItem>
                    <SelectItem value="overdue">देर से</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-green-600">{customerCrates.filter(c => c.status === 'active').length}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">सक्रिय क्रेट्स</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-blue-600">{customerCrates.filter(c => c.status === 'returned').length}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">वापस मिले</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-red-600">{customerCrates.filter(c => c.status === 'overdue').length}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">देर से</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-purple-600">{customerCrates.reduce((sum, c) => sum + c.quantity, 0)}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">कुल क्रेट्स</div>
            </CardContent>
          </Card>
        </div>

        {/* Crates List */}
        <div className="space-y-4">
          {filteredCrates.length > 0 ? (
            filteredCrates.map((crate) => (
              <Card key={crate.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0">
                    
                    {/* Customer Info */}
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                          {crate.customerName}
                        </h3>
                        <Badge className={getStatusColor(crate.status)}>
                          {getStatusLabel(crate.status)}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4" />
                          <span>{crate.customerPhone}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Package className="h-4 w-4" />
                          <span>{getCrateTypeLabel(crate.crateType)} × {crate.quantity}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4" />
                          <span className="truncate">{crate.customerAddress}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span>दिया: {new Date(crate.assignedDate).toLocaleDateString('hi-IN')}</span>
                        </div>
                        {crate.returnDate && (
                          <div className="flex items-center space-x-2 md:col-span-2">
                            <Calendar className="h-4 w-4" />
                            <span>वापसी: {new Date(crate.returnDate).toLocaleDateString('hi-IN')}</span>
                          </div>
                        )}
                        {crate.notes && (
                          <div className="md:col-span-2">
                            <strong>टिप्पणी:</strong> {crate.notes}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4 mr-1" />
                        संपादित करें
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                        <Trash2 className="h-4 w-4 mr-1" />
                        हटाएं
                      </Button>
                    </div>

                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card>
              <CardContent className="py-12 text-center">
                <Package className="h-24 w-24 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-gray-500 dark:text-gray-400 mb-2">
                  कोई ग्राहक क्रेट नहीं मिला
                </h3>
                <p className="text-gray-400 dark:text-gray-500 mb-6">
                  खोज मापदंड के अनुसार कोई परिणाम नहीं मिला
                </p>
                <Link href="/customer-crates/add">
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                    पहला ग्राहक क्रेट जोड़ें
                  </Button>
                </Link>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}
