import 'dotenv/config';
import express from "express";
import { serve } from "inngest/express";
import resumeRouter from './route/resume.route.js'
import assessmentRouter from './route/assessment.route.js'
import coverLetterRouter from './route/coverLetter.route.js'
import userRouter from './route/user.route.js'
import { inngest, functions } from "./lib/inngest/index.js"
import { clerkAuthMiddleware } from './middleware/clerkAuth.js'

const app = express();
// Important: ensure you add JSON middleware to process incoming JSON POST payloads.
app.use(express.json());
// Set up the "/api/inngest" (recommended) routes with the serve handler
app.use("/api/inngest", serve({ client: inngest, functions }));

// Apply Clerk auth middleware to protect routes
app.use('/api/resume', clerkAuthMiddleware, resumeRouter)
app.use('/api/assessment', clerkAuthMiddleware, assessmentRouter)
app.use('/api/coverletter', clerkAuthMiddleware, coverLetterRouter)
app.use('/api/user',userRouter)

app.get("/api/hello", async function (req, res, next) {
  await inngest.send({
    name: "test/hello.world",
    data: {
      email: "testUser@example.com",
    },
  }).catch(err => next(err));
  res.json({ message: 'Event sent!' });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
