
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class QRCode {
    id: string;
    slug: string;
    image: string;
    data: string;
}

export abstract class IQuery {
    abstract getAllQRCodes(): QRCode[] | Promise<QRCode[]>;

    abstract getQRCodeById(qrCodeId: string): QRCode | Promise<QRCode>;

    abstract getQRCodeBySlug(slug: string): QRCode | Promise<QRCode>;

    abstract getQRCodesByData(data: string): QRCode[] | Promise<QRCode[]>;
}

export abstract class IMutation {
    abstract generateQRCode(text: string): QRCode | Promise<QRCode>;

    abstract saveQRCodeWithSlug(slug: string, text: string): QRCode | Promise<QRCode>;

    abstract convertTextToQRCode(text: string): QRCode | Promise<QRCode>;

    abstract convertBinaryToQRCode(binaryData: string): QRCode | Promise<QRCode>;
}

type Nullable<T> = T | null;
