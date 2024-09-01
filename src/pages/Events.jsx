import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ThemeProvider } from "@/components/ThemeProvider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const eventsData = [
  { id: 1, title: "Annual Alumni Reunion", date: "July 15, 2024", location: "University Campus" },
  { id: 2, title: "Career Development Workshop", date: "August 5, 2024", location: "Online" },
];

const Events = () => {
  return (
    <ThemeProvider defaultTheme="system" enableSystem>
      <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8 text-center">Events & Reunions</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventsData.map((event) => (
              <Card key={event.id} className="dark:bg-gray-800">
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Date: {event.date}</p>
                  <p>Location: {event.location}</p>
                  <Button className="mt-4">Register</Button>
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

export default Events;