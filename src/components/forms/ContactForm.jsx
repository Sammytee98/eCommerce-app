import Button from "../ui/Button";

const ContactForm = ({ contactFormData, handleChange, handleSubmit }) => {
  const { fullName, email, subject, message } = contactFormData;

  return (
    <section className="space-y-15 px-6 py-16">
      <h3 className="text-2xl tablet:text-3xl text-center font-bold">
        Send Us a Message
      </h3>

      <form className="w-full max-w-xl space-y-2 px-6 py-8 rounded-md shadow-cs border-2 border-gray-200 mx-auto">
        <div className="w-full flex flex-col space-y-1.5">
          <label
            className="text-base tablet:text-lg font-medium"
            htmlFor="fullName"
          >
            Full Name
          </label>
          <input
            onChange={handleChange}
            type="text"
            id="fullName"
            name="fullName"
            value={fullName}
            placeholder="Enter your full name"
            required
            className="py-2 px-3 border-2 border-gray-200 focus:outline-orange-500 text-base rounded-md"
          />
        </div>
        <div className="w-full flex flex-col space-y-1.5">
          <label
            className="text-base tablet:text-lg font-medium"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            onChange={handleChange}
            type="text"
            id="email"
            name="email"
            value={email}
            placeholder="you@example.com"
            required
            className="py-2 px-2 border-2 border-gray-200 focus:outline-orange-500 text-base rounded-md"
          />
        </div>
        <div className="w-full flex flex-col space-y-1.5">
          <label
            className="text-base tablet:text-lg font-medium"
            htmlFor="subject"
          >
            Subject
          </label>
          <input
            onChange={handleChange}
            type="text"
            id="subject"
            name="subject"
            value={subject}
            placeholder="What's you messsage about?"
            required
            className="py-2 px-2 border-2 border-gray-200 focus:outline-orange-500 text-base rounded-md"
          />
        </div>
        <div className="w-full flex flex-col space-y-1.5">
          <label
            className="text-base tablet:text-lg font-medium"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            onChange={handleChange}
            name="message"
            id="message"
            cols="10"
            rows="8"
            value={message}
            placeholder="Write your message here..."
            className="resize-none py-2 px-2 border-2 border-gray-200 focus:outline-orange-500 text-base rounded-md"
          ></textarea>
        </div>

        <Button
          onClick={handleSubmit}
          children="Send Message"
          className="px-6 py-2.5 mt-4"
        />
      </form>
    </section>
  );
};

export default ContactForm;
