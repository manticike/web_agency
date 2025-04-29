"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner"; // Using Sonner for toast notifications

import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/navbar";
import { PiSmiley } from "react-icons/pi";

// Define the Zod schema for form validation
const FormSchema = z
  .object({
    first_name: z.string().nonempty("First name is required"),
    last_name: z.string().nonempty("Last name is required"),
    email: z.string().email("Invalid email address"),
    job_title: z.string().nonempty("Job title is required"),
    company_name: z.string().nonempty("Company name is required"),
    help: z.enum([
      "Evaluate Mantic for my company",
      "Learn More",
      "Get a Quote",
      "Other",
    ]),
    services: z.enum([
      "Mobile App Development",
      "Ecommerce",
      "Inventory Management Software",
      "Website Development",
      "Support",
    ]),
    info: z.string().optional(),
    terms: z.boolean(),
  })
  .refine((data) => data.terms, {
    path: ["terms"],
    message: "You must agree to receive marketing communications.",
  });

type FormValues = z.infer<typeof FormSchema>;

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      job_title: "",
      company_name: "",
      help: "Learn More",
      services: "Mobile App Development",
      info: "",
      terms: false,
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      setLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Something went wrong");
      }

      setSubmitted(true);
      toast.success("Form submitted successfully!");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar
        scrollToWebsiteDesign={() => {}}
        scrollToEcommerce={() => {}}
        scrollToShopifyStores={() => {}}
        scrollToBrands={() => {}}
        scrollToServices={() => {}}
      />
      <div className="md:flex items-start justify-center md:py-20 px-6">
        <div className="">
          <div className="text-5xl font-medium w-full md:w-2/3 pb-5 md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Contact our sales team
          </div>
          <div className="py-4 text-gray-300">
            Let's talk about how Mantic can help your team work better.
          </div>

          <div className="bg-[#f6f5f4] md:w-4/5 space-y-6 p-4 rounded-2xl my-4 hidden md:flex md:flex-col">
            <div className="flex gap-4 border-b">
              <div className="font-normal pb-4">
                One flexible agency for your entire company to share knowledge,
                ship projects, and collaborate.
              </div>
            </div>

            <div className="flex gap-4 border-b">
              <div className="font-normal pb-4">
                Enterprise features to securely manage user access and security.
              </div>
            </div>

            <div className="flex gap-4">
              <div className="font-normal pb-4">
                Dedicated support to work with you on your setup and help you
                build the best plan for your company.
              </div>
            </div>
          </div>
        </div>

        <Form {...form}>
          {!submitted ? (
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 h-full border border-white rounded-3xl p-10 md:w-1/3"
            >
              <div className="md:flex items-center gap-6">
                <FormField
                  control={form.control}
                  name="first_name"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-sm text-white">
                        First name *
                      </FormLabel>
                      <FormControl>
                        <Input {...field} className="text-white" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="last_name"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-sm text-white">
                        Last name *
                      </FormLabel>
                      <FormControl>
                        <Input {...field} className="text-white"/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-sm text-white">
                      Email *
                    </FormLabel>
                    <FormControl>
                      <Input {...field} className="text-white"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="job_title"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-sm text-white">
                      Job Title *
                    </FormLabel>
                    <FormControl>
                      <Input {...field} className="text-white"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="company_name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-sm text-white">
                      Company name *
                    </FormLabel>
                    <FormControl>
                      <Input {...field} className="text-white"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="services"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-sm text-white">
                      Services you are interested in
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="text-white">
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Mobile App Development">
                          Mobile App Development
                        </SelectItem>
                        <SelectItem value="Ecommerce">
                          E-Commerce
                        </SelectItem>
                        <SelectItem value="Shopify Stores">
                          Shopify Stores
                        </SelectItem>
                        <SelectItem value="Inventory Management">
                          Inventory Management
                        </SelectItem>
                        <SelectItem value="Website Development">
                          Website Development
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="help"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-sm text-white">
                      How can we help?
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="text-white">
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Evaluate Mantic for my company">
                          Evaluate Mantic for my company
                        </SelectItem>
                        <SelectItem value="Learn More">
                          Learn More
                        </SelectItem>
                        <SelectItem value="Get a Quote">
                          Get a Quote
                        </SelectItem>
                        <SelectItem value="Other">
                          Other
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="terms"
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-2">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="text-sm text-gray-400">
                      I agree to receive marketing communications.
                    </FormLabel>
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Submitting..." : "Submit"}
              </Button>
            </form>
          ) : (
            <div className="p-10 md:w-1/3 flex flex-col items-center justify-center border rounded-3xl">
              <PiSmiley size={64} className="text-green-400" />
              <h2 className="text-xl font-semibold text-center mt-4">
                Thank you for contacting us!
              </h2>
              <p className="text-gray-400 text-center mt-2">
                We will get back to you soon.
              </p>
            </div>
          )}
        </Form>
      </div>
    </div>
  );
}
