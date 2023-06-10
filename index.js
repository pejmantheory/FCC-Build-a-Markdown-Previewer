
const initialState = `
This is a paragraph

# heading 1
## heading 2
###### This is a Heading h6

[Google](https://www.google.com/)

Inline code  \`markedjs/marked\`

Blocks of code
\`\`\`
let message = 'Hello world';
alert(message);
\`\`\`
List item
* Item 1
* Item 2

 Blockquotes
> Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.
>
>> Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.

![FreeCodeCamp](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

**This text is bold**

`;


class App extends React.Component{
  state = {
    text: initialState
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  render(){
    const { text } = this.state;
    const markdown = marked.parse(text, {breaks: true});
    return(
      <div>
        <h1 className="text-center">Markdown Previewer</h1>
        <div className="row">
          <div className="col-6 g-0 p-2">
            <textarea
              className="form-control"
              id="editor"
              value={text}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-6 g-0">
            <p className ="p-3" id="preview" dangerouslySetInnerHTML={{__html: markdown}}></p>
          </div>
        </div>
      </div>
    );
  }
}



/*marked.setOptions({
    breaks: true
})

const renderer = new marked.Renderer();


function App(){
    const [text, setText] = React.useState("");

    return(
        <div className="text-center px-4">
            <h1 className="p-4">Markdown Previewer</h1>
            <textarea
            name="text"
            id="editor"
            rows="10"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="textarea"
            ></textarea>
            <h3 className="mt-3">Output</h3>
            <Preview markdown={text}/>
        </div>
    );
}

function Preview(markdown){
    return(
        <div
            dangerouslySetInnerHTML={{ __html: marked(markdown, {renderer:renderer})}}
            id="preview"
        ></div>
    )
}
*/
ReactDOM.render(<App/>,document.getElementById('app'));
