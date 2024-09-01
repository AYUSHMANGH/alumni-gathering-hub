import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeProvider } from "@/components/ThemeProvider";

const alumniData = [
  { id: 1, name: "John Doe", graduationYear: 2020, company: "Tech Corp", image: "/placeholder.svg" },
  { id: 2, name: "Jane Smith", graduationYear: 2019, company: "Innovate Inc", image: "/placeholder.svg" },
  { id: 3, name: "Mike Johnson", graduationYear: 2021, company: "Future Systems", image: "/placeholder.svg" },
];

const Index = () => {
  return (
    <ThemeProvider defaultTheme="system" enableSystem>
      <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8 text-center">Alumni Tracking</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {alumniData.map((alumni) => (
              <Card key={alumni.id} className="dark:bg-gray-800">
                <CardHeader>
                  <CardTitle>{alumni.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <img src={alumni.image} alt={alumni.name} className="w-full h-48 object-cover mb-4 rounded-md" />
                  <p>Graduation Year: {alumni.graduationYear}</p>
                  <p>Current Company: {alumni.company}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
