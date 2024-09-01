import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ThemeProvider } from "@/components/ThemeProvider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Donate = () => {
  return (
    <ThemeProvider defaultTheme="system" enableSystem>
      <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8 text-center">Donation Portal</h1>
          <Card className="max-w-md mx-auto dark:bg-gray-800">
            <CardHeader>
              <CardTitle>Make a Donation</CardTitle>
            </CardHeader>
            <CardContent>
              <form>
                <div className="mb-4">
                  <Input type="number" placeholder="Amount" />
                </div>
                <div className="mb-4">
                  <Input type="text" placeholder="Name" />
                </div>
                <div className="mb-4">
                  <Input type="email" placeholder="Email" />
                </div>
                <Button className="w-full">Donate Now</Button>
              </form>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Donate;