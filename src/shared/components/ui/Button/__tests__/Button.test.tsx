import { fireEvent, render } from "@testing-library/react"
import Button from "../Button"

describe('Button', () => { 
    test('should render button', () => {
        const { getByText } = render(<Button>Hello</Button>);

    })
    
 })