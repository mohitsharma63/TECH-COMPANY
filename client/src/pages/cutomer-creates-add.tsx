
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Plus, Package, Users, Save } from "lucide-react";
import { Link } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const customerCrateSchema = z.object({
  customerName: z.string().min(1, "ग्राहक का नाम आवश्यक है"),
  customerPhone: z.string().min(10, "फोन नंबर कम से कम 10 अंकों का होना चाहिए"),
  customerAddress: z.string().min(1, "पता आवश्यक है"),
  crateType: z.string().min(1, "क्रेट का प्रकार चुनें"),
  quantity: z.number().min(1, "मात्रा 1 से अधिक होनी चाहिए"),
  assignedDate: z.string().min(1, "तारीख आवश्यक है"),
  returnDate: z.string().optional(),
  notes: z.string().optional(),
});

type CustomerCrateForm = z.infer<typeof customerCrateSchema>;

export default function CustomerCratesAddPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<CustomerCrateForm>({
    resolver: zodResolver(customerCrateSchema),
    defaultValues: {
      customerName: "",
      customerPhone: "",
      customerAddress: "",
      crateType: "",
      quantity: 1,
      assignedDate: new Date().toISOString().split('T')[0],
      returnDate: "",
      notes: "",
    },
  });

  const onSubmit = async (data: CustomerCrateForm) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "सफलता",
        description: "ग्राहक क्रेट सफलतापूर्वक जोड़ा गया",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "त्रुटि",
        description: "ग्राहक क्रेट जोड़ने में समस्या हुई",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const crateTypes = [
    { value: "small", label: "छोटा - Small (5-10 किलो)" },
    { value: "medium", label: "मध्यम - Medium (10-20 किलो)" },
    { value: "large", label: "बड़ा - Large (20-30 किलो)" },
    { value: "xl", label: "एक्स्ट्रा लार्ज - XL (30+ किलो)" },
  ];

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
              <div className="bg-green-500 text-white p-3 rounded-full">
                <Plus className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">नए ग्राहक क्रेट्स जोड़ें</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">Add New Customer Crates</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-800 dark:text-gray-200 flex items-center">
              <Users className="h-6 w-6 mr-3" />
              ग्राहक क्रेट जानकारी
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Customer Name */}
                <div>
                  <Label htmlFor="customerName" className="text-base font-medium">
                    ग्राहक का नाम *
                  </Label>
                  <Input
                    id="customerName"
                    {...form.register("customerName")}
                    className="mt-2 text-lg py-3"
                    placeholder="ग्राहक का पूरा नाम दर्ज करें"
                  />
                  {form.formState.errors.customerName && (
                    <p className="text-red-500 text-sm mt-1">
                      {form.formState.errors.customerName.message}
                    </p>
                  )}
                </div>

                {/* Customer Phone */}
                <div>
                  <Label htmlFor="customerPhone" className="text-base font-medium">
                    फोन नंबर *
                  </Label>
                  <Input
                    id="customerPhone"
                    {...form.register("customerPhone")}
                    className="mt-2 text-lg py-3"
                    placeholder="फोन नंबर दर्ज करें"
                    type="tel"
                  />
                  {form.formState.errors.customerPhone && (
                    <p className="text-red-500 text-sm mt-1">
                      {form.formState.errors.customerPhone.message}
                    </p>
                  )}
                </div>

                {/* Customer Address */}
                <div className="md:col-span-2">
                  <Label htmlFor="customerAddress" className="text-base font-medium">
                    पता *
                  </Label>
                  <Textarea
                    id="customerAddress"
                    {...form.register("customerAddress")}
                    className="mt-2 text-lg py-3"
                    placeholder="पूरा पता दर्ज करें"
                    rows={3}
                  />
                  {form.formState.errors.customerAddress && (
                    <p className="text-red-500 text-sm mt-1">
                      {form.formState.errors.customerAddress.message}
                    </p>
                  )}
                </div>

                {/* Crate Type */}
                <div>
                  <Label htmlFor="crateType" className="text-base font-medium">
                    क्रेट का प्रकार *
                  </Label>
                  <Select onValueChange={(value) => form.setValue("crateType", value)}>
                    <SelectTrigger className="mt-2 text-lg py-3">
                      <SelectValue placeholder="क्रेट का प्रकार चुनें" />
                    </SelectTrigger>
                    <SelectContent>
                      {crateTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {form.formState.errors.crateType && (
                    <p className="text-red-500 text-sm mt-1">
                      {form.formState.errors.crateType.message}
                    </p>
                  )}
                </div>

                {/* Quantity */}
                <div>
                  <Label htmlFor="quantity" className="text-base font-medium">
                    मात्रा *
                  </Label>
                  <Input
                    id="quantity"
                    {...form.register("quantity", { valueAsNumber: true })}
                    className="mt-2 text-lg py-3"
                    placeholder="क्रेट की मात्रा"
                    type="number"
                    min="1"
                  />
                  {form.formState.errors.quantity && (
                    <p className="text-red-500 text-sm mt-1">
                      {form.formState.errors.quantity.message}
                    </p>
                  )}
                </div>

                {/* Assigned Date */}
                <div>
                  <Label htmlFor="assignedDate" className="text-base font-medium">
                    दिया गया दिनांक *
                  </Label>
                  <Input
                    id="assignedDate"
                    {...form.register("assignedDate")}
                    className="mt-2 text-lg py-3"
                    type="date"
                  />
                  {form.formState.errors.assignedDate && (
                    <p className="text-red-500 text-sm mt-1">
                      {form.formState.errors.assignedDate.message}
                    </p>
                  )}
                </div>

                {/* Return Date */}
                <div>
                  <Label htmlFor="returnDate" className="text-base font-medium">
                    वापसी की तारीख
                  </Label>
                  <Input
                    id="returnDate"
                    {...form.register("returnDate")}
                    className="mt-2 text-lg py-3"
                    type="date"
                  />
                </div>

                {/* Notes */}
                <div className="md:col-span-2">
                  <Label htmlFor="notes" className="text-base font-medium">
                    टिप्पणियां
                  </Label>
                  <Textarea
                    id="notes"
                    {...form.register("notes")}
                    className="mt-2 text-lg py-3"
                    placeholder="कोई अतिरिक्त जानकारी या टिप्पणी..."
                    rows={4}
                  />
                </div>

              </div>

              <div className="flex space-x-4 pt-6">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg flex items-center space-x-2"
                >
                  <Save className="h-5 w-5" />
                  <span>{isSubmitting ? "सेव हो रहा है..." : "सेव करें"}</span>
                </Button>
                <Link href="/customer-crates">
                  <Button
                    type="button"
                    variant="outline"
                    className="px-8 py-3 text-lg"
                  >
                    रद्द करें
                  </Button>
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
