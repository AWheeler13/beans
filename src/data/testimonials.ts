// src/data/testimonials.ts
export interface Testimonial {
    quote: string;
    author: string;
    image: string;
  }
  
  export const testimonials: Testimonial[] = [
    {
      quote: "Beans and Roots has become my favorite spot to unwind after work. The community here is amazing, and the kava helps me relax without the effects of alcohol.",
      author: "Jamie L.",
      image: "/images/testimonial1.jpg"
    },
    {
      quote: "I've been coming here for months now, and I've made so many great friends. The staff is knowledgeable and always helps me find the perfect drink for my mood.",
      author: "Michael T.",
      image: "/images/testimonial2.jpg"
    },
    {
      quote: "As someone who doesn't drink alcohol, this place has been a game-changer for my social life. Great vibes, great kava, great people!",
      author: "Sarah K.",
      image: "/images/testimonial3.jpg"
    }
  ];