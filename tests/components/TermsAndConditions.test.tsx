import { render, screen } from '@testing-library/react'
import TermsAndConditions from '../../src/components/TermsAndConditions'

describe('TermsAndConditions', () => {

    it('should render with correct text and initial state  ', () => {
        render(<TermsAndConditions/>)
         const heading = screen.getByRole('heading');
         expect(heading).toBeInTheDocument()
         expect(heading).toHaveTextContent('Terms')

         const checkbox = screen.getByRole('checkbox')
         expect(checkbox).not.toBeChecked()        
         
         const button = screen.getAllByRole('button')
         expect(button).toBeInTheDocument;
         expect(button).toBeDisabled

    });

        it('should render with correct text and initial state  ', () => {
        render(<TermsAndConditions/>)
         const heading = screen.getByRole('heading');
         expect(heading).toBeInTheDocument()
         expect(heading).toHaveTextContent('Terms')

         const checkbox = screen.getByRole('checkbox')
         expect(checkbox).not.toBeChecked()        
         
         const button = screen.getAllByRole('button')
         expect(button).toBeInTheDocument;
         expect(button).toBeDisabled

    });
      


    
})