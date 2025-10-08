
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Plus, Package, Users, Truck, MapPin, AlertCircle, BarChart, FileText, TrendingUp, Search, Eye } from "lucide-react";
import { Link } from "wouter";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertCrateSchema, type InsertCrate, type Crate } from "@shared/schema";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function CratesPage() {
  const [showForm, setShowForm] = useState(false);
  const [selectedTab, setSelectedTab] = useState("customers");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const { toast } = useToast();

  const { data: crates, isLoading } = useQuery({
    queryKey: ["/api/crates"],
  });

  const form = useForm<InsertCrate>({
    resolver: zodResolver(insertCrateSchema),
    defaultValues: {
      crateNumber: "",
      size: "",
      capacity: 0,
      currentLocation: "",
      status: "available",
      assignedTo: "",
    },
  });

  const createCrateMutation = useMutation({
    mutationFn: async (data: InsertCrate) => {
      const response = await apiRequest("POST", "/api/crates", data);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/crates"] });
      toast({
        title: "सफलता",
        description: "क्रेट सफलतापूर्वक जोड़ा गया",
      });
      setShowForm(false);
      form.reset();
    },
    onError: () => {
      toast({
        title: "त्रुटि",
        description: "क्रेट जोड़ने में समस्या हुई",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertCrate) => {
    createCrateMutation.mutate(data);
  };

  const crateStatuses = [
    { value: "available", label: "उपलब्ध", color: "green" },
    { value: "in-use", label: "उपयोग में", color: "blue" },
    { value: "damaged", label: "क्षतिग्रस्त", color: "red" },
  ];

  const filteredCrates = crates?.filter((crate: Crate) => 
    selectedStatus === "all" || crate.status === selectedStatus
  ) || [];

  const getStatusColor = (status: string) => {
    const statusMap = {
      available: "text-green-600 bg-green-100",
      "in-use": "text-blue-600 bg-blue-100",
      damaged: "text-red-600 bg-red-100",
    };
    return statusMap[status as keyof typeof statusMap] || "text-gray-600 bg-gray-100";
  };

  const getStatusLabel = (status: string) => {
    const statusMap = {
      available: "उपलब्ध",
      "in-use": "उपयोग में",
      damaged: "क्षतिग्रस्त",
    };
    return statusMap[status as keyof typeof statusMap] || status;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">लोड हो रहा है...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-background">
      {/* Header */}
      <header className="bg-white dark:bg-card shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="outline" size="sm" className="flex items-center space-x-2">
                  <ArrowLeft className="h-4 w-4" />
                  <span>वापस</span>
                </Button>
              </Link>
              <div className="bg-purple-500 text-white p-3 rounded-full">
                <Package className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">क्रेट्स प्रबंधन</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">Crates Management</p>
              </div>
            </div>
            <Button 
              onClick={() => setShowForm(true)}
              className="flex items-center space-x-2 bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg"
            >
              <Plus className="h-5 w-5" />
              <span>नया क्रेट जोड़ें</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="customers" className="text-lg py-3">
              <Users className="h-5 w-5 mr-2" />
              ग्राहक | Customers
            </TabsTrigger>
            <TabsTrigger value="suppliers" className="text-lg py-3">
              <Truck className="h-5 w-5 mr-2" />
              आपूर्तिकर्ता | Suppliers
            </TabsTrigger>
          </TabsList>

          {/* Customers Tab */}
          <TabsContent value="customers" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Customer Crates Management */}
              <Card className="bg-blue-50 dark:bg-blue-950 border-blue-300">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-800 dark:text-blue-200 flex items-center">
                    <Package className="h-5 w-5 mr-2" />
                    ग्राहक क्रेट्स
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      नए ग्राहक क्रेट्स जोड़ें
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      ग्राहक क्रेट्स की सूची
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      क्रेट्स का स्टेटस अपडेट करें
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      ग्राहक क्रेट्स रिपोर्ट
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Customer Information */}
              <Card className="bg-green-50 dark:bg-green-950 border-green-300">
                <CardHeader>
                  <CardTitle className="text-lg text-green-800 dark:text-green-200 flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    ग्राहक जानकारी
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      नया ग्राहक रजिस्टर करें
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      ग्राहक डेटाबेस
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      ग्राहक की जानकारी अपडेट करें
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      ग्राहक इतिहास देखें
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Customer Transactions */}
              <Card className="bg-purple-50 dark:bg-purple-950 border-purple-300">
                <CardHeader>
                  <CardTitle className="text-lg text-purple-800 dark:text-purple-200 flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    ग्राहक लेन-देन
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      नया ट्रांजैक्शन रिकॉर्ड करें
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      पेंडिंग पेमेंट्स देखें
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      ग्राहक अकाउंट स्टेटमेंट
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      रिसीट प्रिंट करें
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Crate Tracking */}
              <Card className="bg-orange-50 dark:bg-orange-950 border-orange-300">
                <CardHeader>
                  <CardTitle className="text-lg text-orange-800 dark:text-orange-200 flex items-center">
                    <Search className="h-5 w-5 mr-2" />
                    क्रेट ट्रैकिंग
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      क्रेट लोकेशन ट्रैक करें
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      वापसी की गई क्रेट्स
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      खोई हुई क्रेट्स रिपोर्ट करें
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      क्रेट्स का रखरखाव
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Customer Reports */}
              <Card className="bg-indigo-50 dark:bg-indigo-950 border-indigo-300">
                <CardHeader>
                  <CardTitle className="text-lg text-indigo-800 dark:text-indigo-200 flex items-center">
                    <AlertCircle className="h-5 w-5 mr-2" />
                    ग्राहक रिपोर्ट्स
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      मासिक ग्राहक रिपोर्ट
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      टॉप ग्राहक लिस्ट
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      डिफॉल्टर ग्राहक लिस्ट
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      ग्राहक एक्टिविटी रिपोर्ट
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Customer Analysis */}
              <Card className="bg-teal-50 dark:bg-teal-950 border-teal-300">
                <CardHeader>
                  <CardTitle className="text-lg text-teal-800 dark:text-teal-200 flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    ग्राहक विश्लेषण
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      ग्राहक सेगमेंटेशन
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      सेल्स ट्रेंड एनालिसिस
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      ग्राहक संतुष्टि सर्वे
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      ग्राहक रिटेंशन डेटा
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Suppliers Tab */}
          <TabsContent value="suppliers" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Supplier Crates Management */}
              <Card className="bg-blue-50 dark:bg-blue-950 border-blue-300">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-800 dark:text-blue-200 flex items-center">
                    <Package className="h-5 w-5 mr-2" />
                    आपूर्तिकर्ता क्रेट्स
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      नए आपूर्तिकर्ता क्रेट्स जोड़ें
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      आपूर्तिकर्ता क्रेट्स की सूची
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      इनकमिंग क्रेट्स ट्रैक करें
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      आपूर्तिकर्ता क्रेट्स रिपोर्ट
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Supplier Information */}
              <Card className="bg-green-50 dark:bg-green-950 border-green-300">
                <CardHeader>
                  <CardTitle className="text-lg text-green-800 dark:text-green-200 flex items-center">
                    <Truck className="h-5 w-5 mr-2" />
                    आपूर्तिकर्ता जानकारी
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      नया आपूर्तिकर्ता रजिस्टर करें
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      आपूर्तिकर्ता डेटाबेस
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      आपूर्तिकर्ता की जानकारी अपडेट करें
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      आपूर्तिकर्ता इतिहास देखें
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Supplier Transactions */}
              <Card className="bg-purple-50 dark:bg-purple-950 border-purple-300">
                <CardHeader>
                  <CardTitle className="text-lg text-purple-800 dark:text-purple-200 flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    आपूर्तिकर्ता लेन-देन
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      नया पर्चेस ऑर्डर बनाएं
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      पेंडिंग पेमेंट्स देखें
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      आपूर्तिकर्ता अकाउंट स्टेटमेंट
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      पर्चेस रिसीट प्रिंट करें
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Supply Chain Tracking */}
              <Card className="bg-orange-50 dark:bg-orange-950 border-orange-300">
                <CardHeader>
                  <CardTitle className="text-lg text-orange-800 dark:text-orange-200 flex items-center">
                    <Search className="h-5 w-5 mr-2" />
                    सप्लाई चेन ट्रैकिंग
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      इनकमिंग शिपमेंट ट्रैक करें
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      डिलीवरी शेड्यूल देखें
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      गुड्स रिसीविंग नोट्स
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      क्वालिटी चेक रिपोर्ट
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Supplier Reports */}
              <Card className="bg-indigo-50 dark:bg-indigo-950 border-indigo-300">
                <CardHeader>
                  <CardTitle className="text-lg text-indigo-800 dark:text-indigo-200 flex items-center">
                    <BarChart className="h-5 w-5 mr-2" />
                    आपूर्तिकर्ता रिपोर्ट्स
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      मासिक आपूर्तिकर्ता रिपोर्ट
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      टॉप सप्लायर लिस्ट
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      सप्लायर परफॉर्मेंस रिपोर्ट
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      प्राइस कंपेरिजन चार्ट
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Supplier Analysis */}
              <Card className="bg-teal-50 dark:bg-teal-950 border-teal-300">
                <CardHeader>
                  <CardTitle className="text-lg text-teal-800 dark:text-teal-200 flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    आपूर्तिकर्ता विश्लेषण
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      सप्लायर रेटिंग सिस्टम
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      कॉस्ट एनालिसिस
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      सप्लायर रिस्क असेसमेंट
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      मार्केट ट्रेंड एनालिसिस
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Add Crate Form */}
        {showForm && (
          <Card className="mt-8 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-800 dark:text-gray-200">
                नया क्रेट जोड़ें
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="crateNumber" className="text-base font-medium">
                      क्रेट नंबर *
                    </Label>
                    <Input
                      id="crateNumber"
                      {...form.register("crateNumber")}
                      className="mt-2 text-lg py-3"
                      placeholder="क्रेट नंबर दर्ज करें"
                    />
                    {form.formState.errors.crateNumber && (
                      <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.crateNumber.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="size" className="text-base font-medium">
                      साइज़ *
                    </Label>
                    <Select onValueChange={(value) => form.setValue("size", value)}>
                      <SelectTrigger className="mt-2 text-lg py-3">
                        <SelectValue placeholder="साइज़ चुनें" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small">छोटा</SelectItem>
                        <SelectItem value="medium">मध्यम</SelectItem>
                        <SelectItem value="large">बड़ा</SelectItem>
                        <SelectItem value="extra-large">अतिरिक्त बड़ा</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="capacity" className="text-base font-medium">
                      क्षमता (किलो) *
                    </Label>
                    <Input
                      id="capacity"
                      {...form.register("capacity", { valueAsNumber: true })}
                      className="mt-2 text-lg py-3"
                      placeholder="क्षमता दर्ज करें"
                      type="number"
                    />
                    {form.formState.errors.capacity && (
                      <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.capacity.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="currentLocation" className="text-base font-medium">
                      वर्तमान स्थान
                    </Label>
                    <Input
                      id="currentLocation"
                      {...form.register("currentLocation")}
                      className="mt-2 text-lg py-3"
                      placeholder="स्थान दर्ज करें"
                    />
                  </div>

                  <div>
                    <Label htmlFor="status" className="text-base font-medium">
                      स्थिति *
                    </Label>
                    <Select onValueChange={(value) => form.setValue("status", value)}>
                      <SelectTrigger className="mt-2 text-lg py-3">
                        <SelectValue placeholder="स्थिति चुनें" />
                      </SelectTrigger>
                      <SelectContent>
                        {crateStatuses.map((status) => (
                          <SelectItem key={status.value} value={status.value}>
                            {status.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="assignedTo" className="text-base font-medium">
                      असाइन्ड टू
                    </Label>
                    <Input
                      id="assignedTo"
                      {...form.register("assignedTo")}
                      className="mt-2 text-lg py-3"
                      placeholder="असाइन किया गया व्यक्ति"
                    />
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Button
                    type="submit"
                    disabled={createCrateMutation.isPending}
                    className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 text-lg"
                  >
                    {createCrateMutation.isPending ? "सेव हो रहा है..." : "सेव करें"}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowForm(false)}
                    className="px-8 py-3 text-lg"
                  >
                    रद्द करें
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Current Crates List */}
        <Card className="mt-8 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-800 dark:text-gray-200 flex items-center justify-between">
              <span>वर्तमान क्रेट्स</span>
              <div className="flex space-x-2">
                <Button
                  variant={selectedStatus === "all" ? "default" : "outline"}
                  onClick={() => setSelectedStatus("all")}
                  size="sm"
                >
                  सभी
                </Button>
                {crateStatuses.map((status) => (
                  <Button
                    key={status.value}
                    variant={selectedStatus === status.value ? "default" : "outline"}
                    onClick={() => setSelectedStatus(status.value)}
                    size="sm"
                  >
                    {status.label}
                  </Button>
                ))}
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCrates.length > 0 ? (
                filteredCrates.map((crate: Crate) => (
                  <Card key={crate.id} className="shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <div className="bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 p-3 rounded-full mr-4">
                            <Package className="h-6 w-6" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200">
                              {crate.crateNumber}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {crate.size} - {crate.capacity} किलो
                            </p>
                          </div>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(crate.status)}`}>
                          {getStatusLabel(crate.status)}
                        </div>
                      </div>
                      
                      <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        {crate.currentLocation && (
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2" />
                            {crate.currentLocation}
                          </div>
                        )}
                        {crate.assignedTo && (
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-2" />
                            {crate.assignedTo}
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <Package className="h-24 w-24 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-gray-500 dark:text-gray-400 mb-2">
                    कोई क्रेट नहीं मिला
                  </h3>
                  <p className="text-gray-400 dark:text-gray-500 mb-6">
                    पहला क्रेट जोड़ने के लिए ऊपर दिए गए बटन पर क्लिक करें
                  </p>
                  <Button
                    onClick={() => setShowForm(true)}
                    className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3"
                  >
                    <Plus className="h-5 w-5 mr-2" />
                    पहला क्रेट जोड़ें
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
