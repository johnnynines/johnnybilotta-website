---
title: "Hugo Project Retrospective"
date: "2021-11-10"
author: "Johnny Bilotta"
---

At the beginning of the summer I began a project that I believed would take me about a month to complete. Now, at the beginning of November, I am finally shipping version one of this project. Join me for a retrospective look at making my personal site a Hugo generated static site.

## What Have I Learned
First, Hugo’s ease of use is a bit deceiving. On the surface it seems to make short work of putting a static website together. You add content in the form of markdown files, and provide templates written in HTML, along with some Go Lang functions and methods peppered in there to provide the “automation” of static site generation.

This is really powerful, but I found myself lost at first. I had diligently gone through documentation and was convinced I “got it”. However, when I finally started coding my own theme, things got a bit difficult. I found that I could not get the templates I was developing to do what I wanted them to do. Content was not being rendered the way I expected and frustration began to set it a bit. 

All of a sudden the documentation that I thought I understood was reading like a foreign language. I needed better examples. I then went to find some premade themes on Hugo’s website. Their theme gallery provided quite a bit for me to choose. I found a few that looked good to learn from and I could reverse engineer, just to get the gist of how Hugo builds static content. This was incredibly helpful and where I should have started instead of jumping right into coding my own from scratch using only the documentation to guide me.

I also was very grateful to find there is a large community of Hugo developers that provide help to those who need it through the Hugo [forums](https://discourse.gohugo.io/). As a supplement to the forums I found only a couple of developers blogging about Hugo. One of the most helpful sites I found was [Regis Philibert](https://www.regisphilibert.com/) His posts helped me make sense of the content organization and hierarchy. I am still not clear on how a few things operate but can say that I feel pretty comfortable at this point after reading the articles on his blog.

## Biggest Pain Points
While converting the site from Hugo to Wordpress there were several stumbling blocks I had to overcome that took some trial and error to get through. This is largely due to support for Hugo being isolated to the forums or a handful blogs that are writing about their experience with Hugo.

### Comprehension of documentation
The Hugo documentation is incredibly informative and helpful. Throughout the construction of this site, I had it readily available for reference in a browser tab. However, it helps if you are a bit more familiar with how everything fits together. There is really no ecosystem examples or step-by-step instruction. If you are not so versed in front-end technologies you may have an even bigger learning curve.

As mentioned above this shortcoming was overcome by viewing the code of some of the premade themes. Coupled with browsing and searching subject matter in the forums one is able to find a good primer for using the documentation to its full potential. 

### Understanding Leafs and Bundles
One of the most important things to understand in Hugo is how content is managed. This means understanding page “leafs” and “bundles” which can be a bit confusing until you get some real world examples going. Thankfully I found this wonderful article by [@kaushalmodi](https://twitter.com/kaushalmodi/) about halfway through my third frustrating day messing about with it all. 

If you can get a good grasp of page bundles then you can master a lot of the power Hugo has to offer.

### Deployment / Publishing
If you are building a blog or a site that needs several content updates per week or even month, deploying those changes can be a bit cumbersome for newcomers. There are several avenues one could take depending on their web environment. Netlify, is incredibly popular with the community but you can publish your site to any service you choose.  and getting things up and running with the static site on an S3 buck

Personally, I use AWS for my projects so I stuck with it when I went to deploy. It took me a bit of time to get it all worked out as there is really little in terms of documentation for this on Hugo’s website. [This article](https://nickolaskraus.org/articles/hosting-a-static-website-with-hugo-and-aws/) by Nickolas Kraus gave me a ton of help and furthered my understanding. While that piece got me out of the deployment weeds I think I may to a different setup using AWS Amplify. I am currently exploring that avenue.

## Conclusion
I love Hugo and what it has to offer as a static site generator. If you have the desire to move off of a CMS like Wordpress or Drupal, it provides a lot of what you need without all the backend hassle. Now, if you are new to web development in general, it is not going to be easy to pick up. However, I do believe if your desire is to build business, marketing, and blog type websites, learning how to use a static site generator like Hugo is a good idea.