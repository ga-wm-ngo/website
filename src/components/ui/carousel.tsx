"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

interface NewsItem {
  id: number;
  image: string;
  date: string;
  title: string;
}

export default function Carousel() {
  const news: NewsItem[] = [
    {
      id: 0,
      image: "/news0.jpg",
      date: "يناير 18",
      title: "سعودية تؤسس جمعية للرفق بالحيوان بجدة..”والبيئة” تتوعد المسيئين.",
    },
    {
      id: 1,
      image: "/news1.jpg",
      date: "يناير 18",
      title: "عين الرفق”.. حملة تنطلق بجدة و”البيئة” تتوعد المسيئين للحيوانات.",
    },
    {
      id: 2,
      image: "/news2.jpg",
      date: "يناير 10",
      title: "التباهي باصطحاب الحيوانات تقليد أعمى.",
    },
    {
      id: 3,
      image: "/news3.jpg",
      date: "يناير 10",
      title: "ملاجئ الحيوانات مبادرات فردية تحولت إلى جمعيات.",
    },
    {
      id: 4,
      image: "/news4.jpg",
      date: "يناير 10",
      title: "بسبب التباعد الاجتماعي ارتفاع في تبني الحيوانات الأليفة !",
    },
    {
      id: 5,
      image: "/news5.jpg",
      date: "يناير 10",
      title: "تأسيس جمعية للرفق بالحيوان في جدة.",
    },
    {
      id: 6,
      image: "/news6.jpg",
      date: "يناير 10",
      title: "Meet the woman changing the face of animal adoption in Saudi Arabia.",
    },
  ];

  const scrollContainer = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const isArabicText = (text: string) => {
    return /[\u0600-\u06FF]/.test(text);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Dividers Section */}
      <div className="relative mb-8">
        {/* Blue Divider */}
        <div
          className="absolute right-0 bg-[#ccdae2]"
          style={{
            width: "2px",
            height: "750.006px", 
          }}
        ></div>

{/* Orange Divider */}
<div
  className="absolute right-0"
  style={{
    width: '2px', // Small width for a vertical line
    height: '100px', // Shorter height than the blue divider
    backgroundColor: '#FFC1A2', // Orange color
    zIndex: 2, // Stacked above the blue divider
    flexShrink: 0, // Prevent it from shrinking
    top: '25px', // Adjust this value to move the divider up or down
  }}
></div>

        {/* Title Section */}
  <h2
    className="text-2xl font-bold text-right font-tajawal pr-6"
    style={{
      position: 'relative',
      zIndex: 3, // Ensures title is above both dividers
      padding: '0px 32px'
    }}
  >
    أحدث الأخبار
  </h2>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-end mb-4">
        <Button
          onClick={scrollLeft}
          variant="outline"
          className="mr-2 shadow-md"
        >
          ❮
        </Button>
        <Button onClick={scrollRight} variant="outline" className="shadow-md">
          ❯
        </Button>
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={scrollContainer}
        className="flex overflow-x-scroll space-x-4 scrollbar-hide"
        dir="rtl"
      >
        {news.map((item) => (
          <Card key={item.id} className="min-w-[300px]">
            <CardHeader>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover"
              />
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 text-sm mb-2 text-right font-tajawal">
                {item.date}
              </p>
              <p
                className="text-lg font-tajawal"
                dir={isArabicText(item.title) ? "rtl" : "ltr"}
              >
                {item.title}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-end mt-6">
        <Button className="more" dir="rtl">
          كل الأخبار
        </Button>
      </div>
    </div>
  );
}



