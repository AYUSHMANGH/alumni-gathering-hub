import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/button";

const featuresData = [
  { id: 1, title: "Alumni Directory", description: "Connect with fellow alumni", link: "/directory" },
  { id: 2, title: "Job Portal", description: "Explore career opportunities", link: "/jobs" },
  { id: 3, title: "Events & Reunions", description: "Stay connected with your alma mater", link: "/events" },
  { id: 4, title: "Donation Portal", description: "Support your institution", link: "/donate" },
];

const Index = () => {
  return (
    <ThemeProvider defaultTheme="system" enableSystem>
      <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8 text-center">Welcome to the Alumni Association</h1>
          <p className="text-center mb-8">Connect, engage, and give back to your alma mater</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuresData.map((feature) => (
              <Card key={feature.id} className="dark:bg-gray-800">
                <CardHeader>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{feature.description}</p>
                  <Button asChild>
                    <Link to={feature.link}>Explore</Link>
                  </Button>
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
