import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import LatestBlogPost from "../components/Blog/LatestBlogPost";
import BlogDetailsContent from "../components/Blog/BlogDetailsContent";

const blogs = [
  {
    id: 1,
    title: "5 Reasons Why Hiring a Virtual Assistant Boosts Productivity",
    description:
      "Discover how hiring a Virtual Assistant can help manage administrative tasks, streamline operations, and allow you to focus on growing your business.",
    date: "Oct 02, 2024",
    image: "https://media.licdn.com/dms/image/D4D12AQFd1bSYNRn-lw/article-cover_image-shrink_720_1280/0/1664877835279?e=2147483647&v=beta&t=mQsJyb5Ya-VWvYxddiH837PBI0O5gbITO9wZFOsJceM",
  },
  {
    id: 2,
    title: "How Virtual Assistants Can Manage Your Social Media",
    description:
      "Learn how Virtual Assistants can handle your social media platforms, increase engagement, and create consistent content for your brand.",
    date: "Oct 01, 2024",
    image: "https://virtary.com/wp-content/uploads/2024/04/domenico-loia-hGV2TfOh0ns-unsplash-scaled.jpg",
  },
  {
    id: 3,
    title:
      "The Benefits of Outsourcing to a Virtual Assistant for E-commerce",
    description:
      "Explore how Virtual Assistants can handle customer service, product management, and inventory for your online store, freeing up your time.",
    date: "Sep 30, 2024",
    image: "https://plus.unsplash.com/premium_photo-1684711741887-b0e6e9e6f9eb?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmlydHVhbCUyMGFzc2lzdGFudHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 4,
    title: "Virtual Assistants for Email Management: Why You Need One",
    description:
      "Email overload? Find out how a Virtual Assistant can help organize, prioritize, and respond to your emails, keeping your inbox clutter-free.",
    date: "Sep 29, 2024",
    image: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/300649732/original/87ea2eb9ceaab0f9445130673cd99bd68565aa6b/be-your-reliable-virtual-assistance.jpg",
  },
  {
    id: 5,
    title: "Maximizing Efficiency: How Virtual Assistants Can Handle Data Entry",
    description:
      "Discover how Virtual Assistants can take over repetitive data entry tasks, ensuring accuracy and saving you valuable time.",
    date: "Sep 28, 2024",
    image: "https://thumbs.dreamstime.com/b/male-businessman-working-laptop-office-business-technology-emotional-man-virtual-diagram-artificial-intelligence-robot-212594679.jpg",
  },
  {
    id: 6,
    title: "Virtual Assistants: The Key to Scaling Your Business Operations",
    description:
      "Scaling your business? Learn how Virtual Assistants can manage operations, from administrative support to project management, giving you more flexibility.",
    date: "Sep 27, 2024",
    image: "https://thumbs.dreamstime.com/b/zakenman-die-digitale-chat-bot-op-een-tablet-aanraakt-voor-toegang-tot-informatie-en-gegevens-de-online-roboapplicatie-van-het-197013200.jpg",
  },
];

const BlogDetails = () => {
  const router = useRouter();
  const { id } = router.query; // Get the id from query params
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    if (id) {
      // Find the blog by id (convert id to a number)
      const matchedBlog = blogs.find((blog) => blog.id === parseInt(id));
      setBlog(matchedBlog);
    }
  }, [id]);

  return (
    <>
      {/* <TopHeader /> */}
      <Navbar />
      <PageBanner
        pageTitle="Blog Details"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog Details"
        bgImage="page-title-four"
      />
      {blog ? (
        <BlogDetailsContent
          title={blog.title}
          description={blog.description}
          image={blog.image}
          content={blog.content}
          date={blog.date}
        />
      ) : (
        <p>Loading...</p>
      )}
      <LatestBlogPost />
      <Footer />
    </>
  );
};

export default BlogDetails;
