import React from "react";
import Link from "next/link";

const BlogSidebar = () => {
  return (
    <>
      <div className="blog-details-item">
        <div className="blog-details-search">
          <form>
            <input type="text" className="form-control" placeholder="Search" />
            <button type="submit" className="btn blog-details-btn">
              <i className="icofont-search-1"></i>
            </button>
          </form>
        </div>

        <div className="blog-details-recent">
          <h3>Recent Blogs</h3>
          <ul>
            <li>
              <img src="https://thumbs.dreamstime.com/z/technical-support-customer-service-business-technology-internet-concept-105032610.jpg" alt="Recent" />
              <Link href="/blog-details">
                How Virtual Assistants Can Boost Your E-commerce Sales.
              </Link>
              <ul>
                <li>
                  <Link href="/blog">
                    <i className="icofont-businessman"></i> Admin
                  </Link>
                </li>
                <li>
                  <i className="icofont-calendar"></i> Oct 02, 2024
                </li>
              </ul>
            </li>
            <li>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKMaWanluE5XUvQRQ3vPrtE8UwFycxV665Kg&s" alt="Recent" />
              <Link href="/blog-details">
                Top VA Services for Amazon Sellers to Save Time.
              </Link>
              <ul>
                <li>
                  <Link href="/blog">
                    <i className="icofont-businessman"></i> Admin
                  </Link>
                </li>
                <li>
                  <i className="icofont-calendar"></i> Sep 28, 2024
                </li>
              </ul>
            </li>
            <li>
              <img src="https://ossisto.com/wp-content/uploads/2023/05/Brief-Overview-of-the-Impact-of-Technology-on-Customer-Service-content-images-24-8-2024-1.webp" alt="Recent" />
              <Link href="/blog-details">
                Why Outsourcing to Virtual Assistants is a Smart Move.
              </Link>
              <ul>
                <li>
                  <Link href="/blog">
                    <i className="icofont-businessman"></i> Admin
                  </Link>
                </li>
                <li>
                  <i className="icofont-calendar"></i> Sep 20, 2024
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="blog-details-category">
          <h3>Category</h3>
          <ul>
            <li>
              <Link href="/blog">Amazon VA Services</Link>
            </li>
            <li>
              <Link href="/blog">E-commerce Solutions</Link>
            </li>
            <li>
              <Link href="/blog">Time Management</Link>
            </li>
            <li>
              <Link href="/blog">Outsourcing</Link>
            </li>
            <li>
              <Link href="/blog">Business Growth</Link>
            </li>
            <li>
              <Link href="/blog">VA Tools & Software</Link>
            </li>
            <li>
              <Link href="/blog">Freelancing Tips</Link>
            </li>
            <li>
              <Link href="/blog">Productivity</Link>
            </li>
            <li>
              <Link href="/blog">VA Success Stories</Link>
            </li>
          </ul>
        </div>

        <div className="blog-details-tags">
          <h3>Tags</h3>
          <ul>
            <li>
              <Link href="/blog">Virtual Assistant</Link>
            </li>
            <li>
              <Link href="/blog">Amazon VA</Link>
            </li>
            <li>
              <Link href="/blog">E-commerce</Link>
            </li>
            <li>
              <Link href="/blog">Outsourcing</Link>
            </li>
            <li>
              <Link href="/blog">Productivity</Link>
            </li>
            <li>
              <Link href="/blog">Business</Link>
            </li>
            <li>
              <Link href="/blog">Freelancing</Link>
            </li>
            <li>
              <Link href="/blog">Growth</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default BlogSidebar;
