import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ThemeProvider } from "@/components/ThemeProvider";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Directory = () => {
  return (
    <ThemeProvider defaultTheme="system" enableSystem>
      <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8 text-center">Alumni Directory</h1>
          <div className="max-w-md mx-auto mb-8">
            <Input type="text" placeholder="Search alumni..." className="mb-4" />
            <Button className="w-full">Search</Button>
          </div>
          {/* Add alumni listing component here */}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Directory;