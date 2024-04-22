"use client"

import React from "react"
import { Copy } from "lucide-react"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const Checkout = () => {
  const form = useForm()

  const Method = form.watch("method")

  console.log(Method)

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
      <Card className="bg-inherit lg:col-span-1">
        <CardHeader className="px-0 text-lg font-medium lg:py-2 xl:py-3 xl:text-2xl 2xl:py-4 4xl:py-6 4xl:text-4xl">
          Choose a payment method
        </CardHeader>
        <CardContent className="my-auto flex  flex-col  gap-5 rounded-lg bg-form px-8 py-10 2xl:gap-8">
          <div className="w-8/12 ">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(() => {})} className="">
                <FormField
                  control={form.control}
                  name="method"
                  render={({ field }) => (
                    <FormItem className="space-y-2 lg:space-y-1 2xl:space-y-2 4xl:space-y-3">
                      <FormLabel className="text-sm text-muted-foreground lg:text-xs 2xl:text-sm 4xl:text-xl">
                        Payment Method
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={"crypto"}>
                        <FormControl>
                          <SelectTrigger className="border-none bg-card text-xs  2xl:text-sm 4xl:h-14 4xl:text-xl">
                            <SelectValue placeholder="Select a payment method" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="crypto">Pay with crypto</SelectItem>
                          <SelectItem value="card">Pay with card</SelectItem>
                          <SelectItem value="team">Pay with team</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </div>
          <div className="flex flex-col space-y-2">
            <span className="w-7/12 text-xs text-foreground 2xl:w-6/12 2xl:text-sm">Total: £374.99</span>
            {Method === "crypto" ? (
              <Button className="w-fit bg-[#0052FF] px-8 text-white">Pay with Coinbase</Button>
            ) : Method === "card" ? (
              <Button className="w-fit bg-[#635BFF] px-8 text-white">Pay with Stripe</Button>
            ) : Method === "team" ? (
              <Button className="w-fit bg-gradient-to-bl from-[#7f04e3] to-[#ff006b] px-8 text-white">
                Pay with Team
              </Button>
            ) : (
              <Button className="w-fit bg-gradient-to-bl from-[#7f04e3] to-[#ff006b] px-8 text-white">
                Pay with Coinbase
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
      <Card className=" bg-inherit lg:col-span-1">
        <CardHeader className="px-0 text-lg font-medium lg:py-2 xl:py-3 xl:text-2xl 2xl:py-4 4xl:py-6 4xl:text-4xl">
          Currently Selected
        </CardHeader>
        <CardContent className="flex  flex-col gap-5 rounded-lg  bg-form px-8 py-4">
          <p className="text-3xl">Business £24.99</p>
          <span className="text-xs 2xl:text-sm">Software API Access</span>
          <span className="text-xs 2xl:text-sm">Civitai Integration</span>
          <span className="text-xs 2xl:text-sm">Model Marketplace Access</span>
          <div className="">
            <Button className="border border-separator bg-card text-foreground hover:bg-card">
              Select Different Plan{" "}
            </Button>
          </div>
        </CardContent>
      </Card>
      <Card className="col-span-2 bg-inherit">
        <CardHeader className="px-0">
          <CardTitle>Transaction History</CardTitle>
        </CardHeader>
        <CardContent className="w-8/12 space-y-5 px-0">
          <p>**### Terms and Conditions for CUPID AI****</p>
          <p>
            Introduction**Welcome to CUPID AI, a business-to-business (B2B) Software as a Service (SaaS) platform
            specializing in AI-driven image generation. By accessing or using our services, you agree to be bound by
            these terms and conditions.
          </p>
          <p>
            **#### Service Description**CUPID AI provides AI-powered tools for generating images tailored for
            businesses. Our services are designed to support marketing, design, and content creation efforts.
          </p>
          <p>
            **#### User Obligations**- Use our services for lawful, ethical, and business purposes only.- Ensure any
            content uploaded complies with copyright laws.- Maintain the confidentiality of your account information.
          </p>
          <p>
            **#### Intellectual Property Rights**- Users retain ownership of original content uploaded to CUPID AI.-
            CUPID AI holds intellectual property rights over the generated images and technology used.
          </p>
          <p>
            **#### Usage Restrictions**- Do not use CUPID AI to create offensive, illegal, or harmful content.- Avoid
            sharing access to your account with unauthorized individuals.
          </p>
          <p>
            **#### Payment Terms**- Services are provided on a subscription basis. Payment terms will be specified upon
            subscription.- All fees are non-refundable, except as expressly provided in these terms.- Marketplace
            purchases have a 3 day money-back-guarantee**#### Termination**- Either party may terminate the agreement
            with written notice.- CUPID AI reserves the right to terminate or suspend access for violations of these
            terms.
          </p>
          <p>
            **#### Disclaimer of Warranties**- CUPID AI provides its services as is and without warranties of any kind,
            either express or implied.- We do not guarantee that the services will meet your specific requirements or be
            uninterrupted.by using this service, you agree that you have read, understood, and agreed to these terms and
            conditions.
          </p>
          <p>
            **#### Limitation of Liability**- CUPID AI will not be liable for any indirect, incidental, or consequential
            damages arising out of the use of our services.
          </p>
          <p>
            **#### Modifications to Terms**- We reserve the right to modify these terms at any time. Continued use of
            the services after such changes constitutes acceptance of the new terms.
          </p>
          <p>
            **#### Governing Law**- These terms shall be governed by the laws of the jurisdiction in which CUPID AI
            operates. Disputes arising under these terms will be resolved in the relevant courts.
          </p>

          <p>
            **#### Contact Information**For questions or concerns regarding these terms, please contact us at
            https://discord.gg/sDp7s7JXH6By using the services provided by CUPID AI, you acknowledge and agree these
            terms
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default Checkout
