import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Instagram, Mail, Phone, Send } from 'lucide-react';  // GitHub import qilindi
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t('contact.title')}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="border shadow-sm">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-6">{t('contact.title')}</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    {t('contact.name')}
                  </label>
                  <Input id="name" required />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    {t('contact.email')}
                  </label>
                  <Input id="email" type="email" required />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    {t('contact.message')}
                  </label>
                  <Textarea id="message" rows={5} required />
                </div>
                
                <Button type="submit" className="w-full">
                  {t('contact.send')}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-8">
            <Card className="border shadow-sm">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-semibold mb-6">{t('contact.phone')}</h3>
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">+998 (90) 825-75-03</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border shadow-sm">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-semibold mb-6">{t('contact.social')}</h3>
                <div className="space-y-6">
                  {/* Instagram */}
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-4 rounded-full">
                      <Instagram className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Instagram</p>
                      <a 
                        href="https://instagram.com/raxmatjonoww" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        @raxmatjonoww
                      </a>
                    </div>
                  </div>

                  {/* Telegram */}
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-4 rounded-full">
                      <Send className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Telegram</p>
                      <a 
                        href="https://t.me/raxmatjonoww" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        @raxmatjonoww
                      </a>
                    </div>
                  </div>

                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
