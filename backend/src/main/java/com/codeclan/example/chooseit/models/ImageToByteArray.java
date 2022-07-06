package com.codeclan.example.chooseit.models;

import java.io.ByteArrayOutputStream;
import java.awt.image.BufferedImage;
import java.io.File;
import javax.imageio.ImageIO;

public class ImageToByteArray {
    public static void main(String args[]) throws Exception{
        BufferedImage bImage = ImageIO.read(new File("/Users/aaron/Documents/Gardening.png"));
        ByteArrayOutputStream bos = new ByteArrayOutputStream();
        ImageIO.write(bImage, "png", bos );
        byte [] data = bos.toByteArray();
    }
}
