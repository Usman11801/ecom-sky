import React from "react";
import Link from "next/link";

const blogPosts = [
  {
    title: "How Virtual Assistants Can Streamline Your Amazon Business",
    imgSrc: "https://www.yourvamentor.com/blog/wp-content/uploads/2019/06/YVAM-10-content-ideas-for-blog.png",
    excerpt: "Learn how hiring a virtual assistant can optimize your Amazon operations, from product listing to customer service...",
    date: "Sep 20, 2024",
    link: "/blog",
  },
  {
    title: "Top 5 VA Services to Boost Your Amazon Sales",
    imgSrc: "https://thumbs.dreamstime.com/b/male-businessman-working-laptop-office-business-technology-emotional-man-virtual-diagram-artificial-intelligence-robot-212594679.jpg",
    excerpt: "Explore the top virtual assistant services that can help you grow and scale your Amazon business with ease...",
    date: "Sep 15, 2024",
    link: "/blog",
  },
  {
    title: "Why Amazon Sellers Need Virtual Assistants in 2024",
    imgSrc: "https://thumbs.dreamstime.com/b/businesswoman-working-his-laptop-office-select-icon-security-virtual-display-business-technology-internet-networking-186072462.jpg",
    excerpt: "Discover the reasons why virtual assistants have become essential for Amazon sellers looking to succeed in 2024...",
    date: "Sep 10, 2024",
    link: "/blog",
  },
];

const LatestBlogPost = () => {
  return (
    <>
      <div className="blog-area-two pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Our Latest Blogs</h2>
          </div>

          <div className="row">
            {blogPosts.map((post, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="blog-item">
                  <div className="blog-top">
                    <Link href={post.link}>
                      <img src={post.imgSrc} alt={post.title} />
                    </Link>
                  </div>
                  <div className="blog-bottom">
                    <h3>
                      <Link href={post.link}>{post.title}</Link>
                    </h3>
                    <p>{post.excerpt}</p>
                    <ul>
                      <li>
                        <Link href={post.link}>
                          Read More <i className="icofont-long-arrow-right"></i>
                        </Link>
                      </li>
                      <li>
                        <i className="icofont-calendar"></i>
                        {post.date}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestBlogPost;
