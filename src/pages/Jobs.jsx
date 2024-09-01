import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ThemeProvider } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/button";

const Jobs = () => {
  return (
    <ThemeProvider defaultTheme="system" enableSystem>
      <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8 text-center">Job Portal</h1>
          <div className="flex justify-center mb-8">
            <Button className="mr-4">Search Jobs</Button>
            <Button variant="outline">Post a Job</Button>
          </div>
          {/* Add job listing component here */}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Jobs;