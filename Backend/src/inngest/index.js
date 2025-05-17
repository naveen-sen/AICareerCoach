import { Inngest } from "inngest";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "sensai" , name: "Sensai" });


// Your new function:
const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { message: `Hello ${event.data.email}!` };
  },
);

// Add the function to the exported array:
export const functions = [
  helloWorld
];
