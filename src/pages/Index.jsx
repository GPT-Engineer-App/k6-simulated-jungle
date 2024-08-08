import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Cat, Heart, Info, Paw } from "lucide-react";

const CatBreed = ({ name, description }) => (
  <AccordionItem value={name}>
    <AccordionTrigger>{name}</AccordionTrigger>
    <AccordionContent>
      <CardDescription>{description}</CardDescription>
    </AccordionContent>
  </AccordionItem>
);

const Index = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const catBreeds = [
    { name: "Siamese", description: "Known for their distinctive color points and blue eyes." },
    { name: "Maine Coon", description: "One of the largest domestic cat breeds, known for their intelligence and playful personality." },
    { name: "Persian", description: "Recognized for their long fur and flat faces." },
    { name: "Bengal", description: "Known for their wild appearance and energetic personality." },
    { name: "Sphynx", description: "Distinctive for their lack of fur and wrinkled skin." },
  ];

  const catImages = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg/1200px-Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100">
      <div className="relative h-[50vh] bg-cover bg-center" style={{backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg')"}}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-6xl font-bold text-white text-center">All About Cats</h1>
        </div>
      </div>
      <div className="max-w-4xl mx-auto p-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview"><Info className="mr-2 h-4 w-4" /> Overview</TabsTrigger>
            <TabsTrigger value="breeds"><Paw className="mr-2 h-4 w-4" /> Breeds</TabsTrigger>
            <TabsTrigger value="gallery"><Heart className="mr-2 h-4 w-4" /> Gallery</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>About Cats</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl text-gray-700 mb-4">
                  Cats are fascinating creatures that have been domesticated for thousands of years. They are known for their
                  independence, agility, and affectionate nature. Cats come in various breeds, each with its unique
                  characteristics and personalities.
                </p>
                <p className="text-xl text-gray-700">
                  Whether you're a long-time cat owner or considering adopting your first feline friend, there's always more to learn about these amazing animals.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="breeds">
            <Card>
              <CardHeader>
                <CardTitle>Popular Cat Breeds</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {catBreeds.map((breed, index) => (
                    <CatBreed key={index} name={breed.name} description={breed.description} />
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="gallery">
            <Card>
              <CardHeader>
                <CardTitle>Cat Gallery</CardTitle>
              </CardHeader>
              <CardContent>
                <Carousel className="w-full max-w-xs mx-auto">
                  <CarouselContent>
                    {catImages.map((src, index) => (
                      <CarouselItem key={index}>
                        <img src={src} alt={`Cat ${index + 1}`} className="w-full h-64 object-cover rounded-lg" />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
