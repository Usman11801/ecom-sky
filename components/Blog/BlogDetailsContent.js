import React from "react";
import Link from "next/link";
import CommentForm from "./CommentForm";
import BlogSidebar from "./BlogSidebar";

const BlogDetailsContent = ({ title, description, image, date, content }) => {
  return (
    <>
      <div className="blog-details-area pt-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details-item">
                <div className="blog-details-img">
                  {/* Use the image prop */}
                  <img src={image} alt={title} />

                  {/* Use the title prop */}
                  <h2>{title}</h2>

                  <ul>
                    <li>
                      <Link href="/blog">
                        <i className="icofont-businessman"></i> Admin
                      </Link>
                    </li>

                    {/* Use the date prop */}
                    <li>
                      <i className="icofont-calendar"></i> {date}
                    </li>
                  </ul>

                  {/* Use the description prop */}
                  <p>{description}</p>

                  {/* Use the content prop */}
                  <p>{content}</p>
                </div>

                <div className="blog-details-previous">
                  <h3>
                    Essential Amazon VA Services to Streamline Your Business
                  </h3>
                  <ul>
                    <li>
                      1. Product research to identify profitable products for your store.
                    </li>
                    <li>
                      2. Amazon listing optimization to improve product visibility.
                    </li>
                    <li>
                      3. Inventory management to keep your stock in check.
                    </li>
                    <li>
                      4. Customer support services to handle inquiries and feedback.
                    </li>
                    <li>
                      5. Amazon PPC campaign management to boost sales.
                    </li>
                    <li>
                      6. Order processing and tracking to ensure smooth transactions.
                    </li>
                  </ul>

                  <div className="prev-next">
                    <ul>
                      <li>
                        <a href="#">Previous</a>
                      </li>
                      <li>
                        <a href="#">Next</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* CommentForm */}
              <CommentForm />
            </div>

            <div className="col-lg-4">
              {/* BlogSidebar */}
              <BlogSidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetailsContent;
