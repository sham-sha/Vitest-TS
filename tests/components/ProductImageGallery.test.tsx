import { render, screen } from "@testing-library/react";
import ProductImageGallery from "../../src/components/ProductImageGallery";

describe("product image gallery testing", () => {
  it("should return null when their is no images", () => {
    const { container } = render(<ProductImageGallery imageUrls={[]} />);
    expect(container).toBeEmptyDOMElement();
  });

  
  it("should return a list images", () => {
    const ImageUrls = ['url1','url2'];
    render(<ProductImageGallery imageUrls={ImageUrls}/>);

    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(2)

    ImageUrls.forEach((url,index)=>{
        expect(images[index]).toHaveAttribute('src',url);
    })
    
  });
   
});
