import qrcode from "qrcode"

/**
 * 
 *
 * @param {number|string} id
 * @returns {Promise<string>}
 */
export const generateQRCode = async (id) => {
  try {
    const text = id.toString()

    const qrDataURL = await qrcode.toDataURL(text, {
      errorCorrectionLevel: 'H',
      type: 'image/png',
      quality: 0.92,
      margin: 1,
      width: 300,
      color: {
        dark: '#000000',
        light: '#FFFFFF',
      },
    });
    return qrDataURL
  } catch (error) {
    throw error
  }
}
