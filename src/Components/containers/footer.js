import React from "react";
import Footer from "../footer";
import './footer.css'
import Icons from "../icons";

export function FooterContainer(){

    return(
        <Footer className='footerDesign'>
            <Footer.Wrapper>
                <Footer.Row>
                    <Footer.Column>
                    <img className='hug-mascot-footer' src='Mascot2.png'></img>
                    <img className='hug-logo-footer' src='http://www.hug.com.ph/wp-content/uploads/2019/02/HUG-LOGO.png'></img>
                    
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Reach Us</Footer.Title>
                        <Footer.Title2>1011 Romualdez St., UN Avenue, Ermita, Manila</Footer.Title2>
                        <Footer.Title2>(02) 353-5333</Footer.Title2>
                        <Footer.Title2>0917-872-1111</Footer.Title2>
                        <Footer.Title2>info@hug.com.ph</Footer.Title2>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Show Now</Footer.Title>
                        <Footer.Link className="facebook-footer" href="https://www.facebook.com/HUGOfficialStore/" target="_blank"><Icons className="fab fa-facebook-f" />Facebook</Footer.Link>
                        <Footer.Link className="shopee-footer" href="https://shopee.ph/hugofficialstore" target="_blank"><Icons className="fa-solid fa-s" />Shopee</Footer.Link>
                        <Footer.Link className="lazada-footer" href="https://www.lazada.com.ph/shop/hug1629968689?spm=a2o4l.store_shop_fail_page_pc.recommend_store.1.7f0a2992Oj032f" target="_blank"><Icons className="fa-solid fa-l" />Lazada</Footer.Link>
                    </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}