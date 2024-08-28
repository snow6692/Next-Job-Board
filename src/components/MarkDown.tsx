import ReactMarkdown from "react-markdown";

interface IProps {
  children: string;
}
function MarkDown({ children }: IProps) {
  return (
    <ReactMarkdown
      className="space-y-3"
      components={{
        ul: (props) => <ul className="list-inside list-disc" {...props} />,
        a:(props)=><a className=" text-green-500 underline" target="_blank" {...props} />
      }}
    >
      {children}
    </ReactMarkdown>
  );
}

export default MarkDown;
