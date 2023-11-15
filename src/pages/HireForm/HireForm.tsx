import { useReducer } from "react";
import * as Form from "@radix-ui/react-form";
import "./styles.css";

function HireForm() {
  const [formData, updateFormData] = useReducer(
    (prev: any, next: any) => {
      return { ...prev, ...next };
    },
    { email: "", date: "", "date-from": "", "date-to": "", notes: "" }
  );

  console.log(formData);

  return (
    <div className="form-container">
      <Form.Root className="FormRoot">
        <Form.Field className="FormField" name="email">
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          >
            <Form.Label className="FormLabel">Email</Form.Label>
            <Form.Message className="FormMessage" match="valueMissing">
              Please enter your email
            </Form.Message>
            <Form.Message className="FormMessage" match="typeMismatch">
              Please provide a valid email
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              onChange={(e) => updateFormData({ email: e.target.value })}
              className="Input"
              type="email"
              required
            />
          </Form.Control>
        </Form.Field>

        <Form.Field className="FormField" name="date">
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          >
            <Form.Label className="FormLabel">Date</Form.Label>
            <Form.Message className="FormMessage" match="valueMissing">
              Please enter a date
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              onChange={(e) => updateFormData({ date: e.target.value })}
              className="Input"
              type="date"
              id="date"
            />
          </Form.Control>
        </Form.Field>

        <Form.Field className="FormField" name="from">
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          >
            <Form.Label className="FormLabel">From</Form.Label>
          </div>
          <Form.Control asChild>
            <input
              onChange={(e) => updateFormData({ "date-from": e.target.value })}
              type="time"
              className="Input"
              id="date-from"
            />
          </Form.Control>
        </Form.Field>

        <Form.Field className="FormField" name="to">
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          >
            <Form.Label className="FormLabel">To</Form.Label>
          </div>
          <Form.Control asChild>
            <input
              onChange={(e) => updateFormData({ "date-to": e.target.value })}
              type="time"
              className="Input"
              id="date-to"
            />
          </Form.Control>
        </Form.Field>

        <Form.Field className="FormField" name="question">
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          >
            <Form.Label className="FormLabel">Message</Form.Label>
            <Form.Message className="FormMessage" match="valueMissing">
              Please enter a message
            </Form.Message>
          </div>
          <Form.Control asChild>
            <textarea className="Textarea" required />
          </Form.Control>
        </Form.Field>
        <Form.Submit asChild>
          <button className="Button" style={{ marginTop: 10 }}>
            Submit
          </button>
        </Form.Submit>
      </Form.Root>
    </div>
  );
}

export default HireForm;
