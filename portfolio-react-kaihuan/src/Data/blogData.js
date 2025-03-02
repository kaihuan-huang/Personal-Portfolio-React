
// Blog post data
export const BlogData = [
  {
    id: 1,
    title: "Getting Started with React Hooks",
    date: "June 15, 2023",
    summary: "An introduction to React Hooks and how they can simplify your functional components.",
    content: `
      <h2>Introduction to React Hooks</h2>
      <p>React Hooks were introduced in React 16.8 as a way to use state and other React features without writing a class component. They allow you to "hook into" React state and lifecycle features from function components.</p>
      
      <h3>Why Hooks?</h3>
      <p>Hooks solve many problems that developers faced with class components:</p>
      <ul>
        <li>They make it easier to reuse stateful logic between components</li>
        <li>They split complex components into smaller functions</li>
        <li>They allow you to use React features without classes</li>
      </ul>
      
      <h3>Common Hooks</h3>
      <p>Some of the most commonly used hooks include:</p>
      <ol>
        <li><strong>useState</strong> - For managing local state in a component</li>
        <li><strong>useEffect</strong> - For performing side effects</li>
        <li><strong>useContext</strong> - For accessing context values</li>
        <li><strong>useReducer</strong> - For more complex state logic</li>
        <li><strong>useRef</strong> - For persisting values across renders</li>
      </ol>
      
      <h3>Basic useState Example</h3>
      <pre>
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
      </pre>
      
      <p>This simple example shows how we can add state to a functional component without using a class. The <code>useState</code> hook returns a pair: the current state value and a function to update it.</p>
      
      <h3>Conclusion</h3>
      <p>React Hooks provide a more direct way to use React's features. They help make components smaller, more readable, and easier to test. If you're just getting started with React or looking to modernize your codebase, Hooks are definitely worth learning.</p>
    `,
    author: "Kaihuan Huang",
    category: "React",
    tags: ["React", "Hooks", "JavaScript", "Frontend"]
  },
  {
    id: 2,
    title: "Building Responsive UIs with Tailwind CSS",
    date: "July 20, 2023",
    summary: "How to create responsive and beautiful user interfaces using Tailwind CSS utility classes.",
    content: `
      <h2>Tailwind CSS: A Utility-First Approach</h2>
      <p>Tailwind CSS has revolutionized the way many developers style their applications. Instead of writing custom CSS, Tailwind provides low-level utility classes that let you build completely custom designs without ever leaving your HTML.</p>
      
      <h3>Benefits of Tailwind CSS</h3>
      <ul>
        <li>No more naming CSS classes</li>
        <li>Consistent spacing and color scales</li>
        <li>Responsive design made easy</li>
        <li>Dark mode support</li>
        <li>Customizable and extensible</li>
      </ul>
      
      <h3>Getting Started</h3>
      <p>To start using Tailwind, you'll need to install it and configure it in your project:</p>
      <pre>
npm install -D tailwindcss
npx tailwindcss init
      </pre>
      
      <p>Then, configure your template paths in your tailwind.config.js file:</p>
      <pre>
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
      </pre>
      
      <h3>Building Responsive Designs</h3>
      <p>One of Tailwind's best features is how easy it makes responsive design. Here's an example of a responsive card component:</p>
      <pre>
&lt;div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"&gt;
  &lt;div class="md:flex"&gt;
    &lt;div class="md:shrink-0"&gt;
      &lt;img class="h-48 w-full object-cover md:h-full md:w-48" src="/img/building.jpg" alt="Building"&gt;
    &lt;/div&gt;
    &lt;div class="p-8"&gt;
      &lt;div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold"&gt;Company retreats&lt;/div&gt;
      &lt;a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"&gt;Incredible accommodation for your team&lt;/a&gt;
      &lt;p class="mt-2 text-slate-500"&gt;Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine?&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
      </pre>
      
      <p>Notice the <code>md:</code> prefix on some classes. These are responsive variants that only apply at medium screen sizes and above.</p>
      
      <h3>Conclusion</h3>
      <p>Tailwind CSS provides a different approach to styling your applications. While it may seem verbose at first, the productivity gains and consistency it brings to your projects make it worth considering for your next project.</p>
    `,
    author: "Kaihuan Huang",
    category: "CSS",
    tags: ["Tailwind CSS", "Responsive Design", "CSS", "Frontend"]
  },
  {
    id: 3,
    title: "My Journey Learning Data Structures and Algorithms",
    date: "August 5, 2023",
    summary: "Personal insights and tips from my experience studying data structures and algorithms.",
    content: `
      <h2>The Beginning of My DSA Journey</h2>
      <p>When I first started learning data structures and algorithms, I was overwhelmed. There seemed to be so many concepts to master: arrays, linked lists, trees, graphs, sorting algorithms, dynamic programming, and more. In this post, I'll share my journey and the strategies that helped me progress.</p>
      
      <h3>Starting with the Basics</h3>
      <p>I began with the fundamentals: arrays and linked lists. Understanding these basic data structures is crucial because they form the building blocks for more complex structures.</p>
      
      <h3>Resources That Helped Me</h3>
      <ul>
        <li><strong>Books</strong>: "Cracking the Coding Interview" and "Introduction to Algorithms"</li>
        <li><strong>Online Platforms</strong>: LeetCode, HackerRank, and CodeSignal</li>
        <li><strong>Courses</strong>: Various computer science courses focusing on algorithms</li>
        <li><strong>YouTube</strong>: Channels like "Back To Back SWE" and "Abdul Bari"</li>
      </ul>
      
      <h3>My Study Approach</h3>
      <p>Here's what worked for me:</p>
      <ol>
        <li><strong>Understand the concept</strong>: I made sure to truly understand how each data structure or algorithm works before moving on.</li>
        <li><strong>Implement from scratch</strong>: I implemented each data structure and algorithm without looking at the solution.</li>
        <li><strong>Solve problems</strong>: I solved multiple problems using each concept to reinforce my understanding.</li>
        <li><strong>Review and optimize</strong>: I reviewed my solutions and looked for ways to improve them.</li>
      </ol>
      
      <h3>Tackling Dynamic Programming</h3>
      <p>Dynamic programming was particularly challenging for me. I found that breaking down problems into subproblems and looking for overlapping subproblems helped me grasp this concept better.</p>
      
      <h3>Tips for Beginners</h3>
      <p>If you're just starting out with DSA, here are some tips:</p>
      <ul>
        <li>Start with the basics and build a strong foundation</li>
        <li>Practice consistently, even if it's just for 30 minutes a day</li>
        <li>Don't get discouraged by difficult problems</li>
        <li>Join communities and forums to learn from others</li>
        <li>Try to explain concepts to others - teaching reinforces learning</li>
      </ul>
      
      <h3>Conclusion</h3>
      <p>Learning data structures and algorithms is a journey that takes time and patience. It's not about memorizing solutions but understanding concepts and developing problem-solving skills. Keep at it, and eventually, things will start to click!</p>
    `,
    author: "Kaihuan Huang",
    category: "Computer Science",
    tags: ["Data Structures", "Algorithms", "Learning", "Computer Science"]
  }
];
