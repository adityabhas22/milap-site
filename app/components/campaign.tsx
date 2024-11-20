"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Utensils, Calendar, Trophy, Book, ChevronDown, ArrowRight } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

export default function CampaignLandingPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-90" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <img 
            src="/sc.png" 
            alt="Scaler Logo" 
            className="w-32 mx-auto mb-8 invert"
          />
          <h1 className="text-7xl font-bold mb-6 animate-fade-in">TIME FOR A CHANGE</h1>
          <h2 className="text-5xl font-semibold mb-4">MILAP KOTHARI</h2>
          <p className="text-2xl mb-2">FOR PRESIDENT</p>
          <p className="text-xl mb-12">SST Student Council Elections</p>
          <Button 
            size="lg"
            className="bg-white text-blue-800 hover:bg-blue-100 transition-all"
            onClick={() => document.getElementById('vision')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
            <ChevronDown className="ml-2" />
          </Button>
        </div>
      </header>

      <section id="vision" className="py-24 container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="/placeholder.svg?height=600&width=500" 
              alt="Milap Kothari" 
              className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold text-blue-800">Vision Statement</h2>
            <p className="text-xl leading-relaxed text-gray-700">
              Together, let's transform our campus into a hub of opportunity and celebration. 
              By fostering an engaging community, enhancing facilities, and promoting student growth, 
              I pledge to create an inclusive, dynamic environment where every student thrives and feels valued.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg group">
              Learn More About Milap
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      <section ref={ref} className="py-24 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Key Initiatives</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Utensils,
                title: "Better Food Quality",
                description: "Monthly committee meetings & taste testing panels"
              },
              {
                icon: Calendar,
                title: "Enhanced Events",
                description: "More funding & diverse cultural celebrations"
              },
              {
                icon: Trophy,
                title: "Sports Excellence",
                description: "Updated equipment & new training programs"
              },
              {
                icon: Book,
                title: "Academic Support",
                description: "Flexible schedules & resource hubs"
              }
            ].map((item, index) => (
              <Card 
                key={index}
                className={`bg-white/10 backdrop-blur-lg border-0 transform transition-all duration-500 hover:scale-105 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <item.icon className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-blue-100">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-16">Action Plan</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {[
            {
              title: "Food Quality Improvement",
              points: [
                "Monthly food committee meetings",
                "Student-led taste testing panels",
                "Regular hygiene audits"
              ]
            },
            {
              title: "Event Enhancement",
              points: [
                "Dedicated sponsorship team",
                "Diverse planning committees",
                "Transparent budget management"
              ]
            },
            {
              title: "Sports Development",
              points: [
                "Annual equipment review",
                "Regular facility upgrades",
                "New sports programs"
              ]
            },
            {
              title: "Academic Excellence",
              points: [
                "Flexible study schedules",
                "Resource hubs creation",
                "Peer mentoring system"
              ]
            }
          ].map((section, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-blue-700 mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.points.map((point, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                      {point}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Make a Change?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your vote can transform our campus into a better place for everyone. 
            Together, we can create positive change that lasts.
          </p>
          <blockquote className="text-2xl italic mb-12">
            "Our potential for growth is limitless when we unite our voices and actions."
            <footer className="text-lg mt-2">- Milap Kothari</footer>
          </blockquote>
          <Button 
            size="lg" 
            className="bg-white text-blue-800 hover:bg-blue-100 text-lg px-8 py-6"
          >
            Vote Milap Kothari for President
          </Button>
        </div>
      </section>

      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <img 
            src="/sc.png" 
            alt="Scaler Logo" 
            className="w-24 mx-auto mb-6 invert"
          />
          <p className="mb-2">&copy; 2024 Milap Kothari Campaign</p>
          <p>Building a Better Tomorrow, Together</p>
        </div>
      </footer>
    </div>
  )
}