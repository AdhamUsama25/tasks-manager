import { ITask } from "../types/tasks.types";

export const dummyTasks: ITask[] = [
    {
        id: "1",
        image: "https://example.com/images/task1.jpg",
        title: "Design Landing Page",
        description: "Create a responsive landing page for the new product launch.",
        priority: "high",
        state: "doing"
    },
    {
        id: "2",
        image: "https://example.com/images/task2.jpg",
        title: "Update User Profile API",
        description: "Enhance the user profile API to include recent activity tracking.",
        priority: "medium",
        state: "todo"
    },
    {
        id: "3",
        image: "https://example.com/images/task3.jpg",
        title: "Optimize Database Queries",
        description: "Refactor SQL queries to improve data retrieval speed by 20%.",
        priority: "high",
        state: "todo"
    },
    {
        id: "4",
        image: "https://example.com/images/task4.jpg",
        title: "Redesign Login Page",
        description: "Apply new UI guidelines to the login page for a fresh look.",
        priority: "low",
        state: "todo"
    },
    {
        id: "5",
        image: "https://example.com/images/task5.jpg",
        title: "Fix Navbar Responsiveness",
        description: "Ensure the navbar adjusts correctly on all mobile devices.",
        priority: "medium",
        state: "doing"
    },
    {
        id: "6",
        image: "https://example.com/images/task6.jpg",
        title: "Write Unit Tests for Payment Module",
        description: "Add test cases to cover all scenarios in the payment processing module.",
        priority: "high",
        state: "todo"
    },
    {
        id: "7",
        image: "https://example.com/images/task7.jpg",
        title: "Create Onboarding Screens",
        description: "Design an onboarding experience for new users on the mobile app.",
        priority: "medium",
        state: "done"
    },
    {
        id: "8",
        image: "https://example.com/images/task8.jpg",
        title: "Research Competitor Features",
        description: "Compile a report comparing key features with industry competitors.",
        priority: "low",
        state: "todo"
    },
    {
        id: "9",
        image: "https://example.com/images/task9.jpg",
        title: "Set Up Analytics Dashboard",
        description: "Integrate Google Analytics with a dashboard to monitor user activity.",
        priority: "medium",
        state: "doing"
    },
    {
        id: "10",
        image: "https://example.com/images/task10.jpg",
        title: "Fix Security Vulnerabilities",
        description: "Address high-risk security issues identified in the recent audit.",
        priority: "high",
        state: "todo"
    }
];