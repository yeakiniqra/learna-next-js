'use client'

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const courseTestimonials = [
    {
      quote:
        'I never thought I could learn React so quickly. The course is well-structured and the instructors are very supportive. Highly recommend this school!',
      name: 'Alex Johnson',
      title: 'React Student',
    },
    {
      quote:
        "The instructors here are very knowledgeable and patient. They helped me build a solid foundation in web development that I can build upon.",
      name: 'Samantha Lee',
      title: 'Web Development Student',
    },
    {
      quote:
        "I've always wanted to develop a mobile app, and this school helped me achieve that goal. The instructors are very experienced and the course is very hands-on.",
      name: 'Michael Chen',
      title: 'Mobile App Development Student',
    },
    {
      quote:
        'I have been learning python for a while now, but I never really understood the concepts until I took this course. The instructors are very knowledgeable and the course is very engaging.',
      name: 'Emily Taylor',
      title: 'Python Student',
    },
    {
      quote:
        'The production courses here opened my eyes to the world of devOps. The instructors are very experienced and the course is very hands-on. Highly recommend this school!',
      name: 'Chris Morales',
      title: 'DevOps Student',
    },
  ];

function Testimonials() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear from Students: Voices of success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={courseTestimonials}
                direction="right"
                speed="slow"
      />
            </div>
        </div>
    </div>
  )
}

export default Testimonials