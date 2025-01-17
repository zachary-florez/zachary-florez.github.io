---
layout: archive
title: ""
permalink: /projects/
author_profile: true
---


<h1>Here are some projects I have worked on in the past 🚀</h1>

<title>Projects - Zachary Florez</title>


<h2>Direct Debit End Of Day API Balancing, <i>Java & Apache Spark</i></h2>

At a high level, we have a 3 status levels for direct debit (DD) processing and at the end of the day my team and a sister team who deals with the DD Payments wanted to make sure both systems were balanced for that specific day to prevent Operational Risk Events. I developed the feature from start to finish to sum up the 3 different DD statuses split up by market and currency. I also developed opening (yesterday's closing) and closing (what is still pending for collection) amounts that we needed to balance along side.

First I had to query and filter all our pending and paid tables, then created a new object daily that completed and held all the calculations per market and currency. I then stored that object with amounts back in another pending table for future access, and created a flag in a property file that if set to true, we call the API to balance between the two systems, setting our payload as what I extracted and calculated from our system. 

Whether the balancing is successful with a 200 response or failed for any market or currency, we notify our production team as well as the devlopers via loggers and an email alert stating balanced or unbalanced for the business day and specific market.


<h2>Plat Map Automation, <i>Python & Django</i></h2>

A plat map is a scaled drawing that shows the boundaries of a piece of land, including the location of lots, roads, utilities, and more. Plat maps are legal documents that establish the boundaries of a property. 

My Summer project when I was an intern with Doma was to automate pulling these maps from third party vendors when operations wanted to look at specific properties. I created my first Concept, Product Requirement, and Technical Design Documents before starting the build. After the documents got approved by leadership I created my tasks, developed and tested the feature from start to finish. I completed my first demo when the feature was fully built and later it got released to production at the very end of my internship.

In the long run I <u>decreased Title and Escrow Time for orders by 1-2 minutes</u> by automating this process that was done manually by our operation leaders. 

<h2>Microsoft Student Hackathon Footprint Webapp, <i>Python</i></h2>

Executed Microsoft's plan to be carbon negative by 2030 by building an innovative solution using Microsoft Azure for tracking one's carbon footprint from the plants they nurse and the car/distance they drive every day. 

We implemented AI so that users can scan their camera to detect different plants that they own. We then stored the plants carbon intake and car release of carbon per mileage every day within the users account. 

I developed the Controller (MVC Model) to do the calculations on what a user needed to do still to become carbon negative within the next 2/3 years. 


