
import Smartphone from "../assets/image/smartPhone.png"
import Laptop from "../assets/image/laptop.png"
import Smartwatch from "../assets/image/smartwatch.png"
import WirelessEarbuds from "../assets/image/Wireless Earbuds.png"
import SmartTV from "../assets/image/Smart TV.png"
import BluetoothSpeaker from "../assets/image/Bluetooth Speaker.png"
import GamingConsole from "../assets/image/Gaming Console.png"
import AirPurifier from "../assets/image/Air Purifier.png"
import SmartRefrigerator from "../assets/image/Smart Refrigerator.png"
import ElectricKettle from "../assets/image/Electric Kettle.png"
import MicrowaveOven from "../assets/image/Microwave Oven.png"
import SmartBulb from "../assets/image/Smart Bulb.png"
import ElectricShaver from "../assets/image/Electric Shaver.png"
import CoffeeMaker from "../assets/image/Coffee Maker.png"
import HairDryer from "../assets/image/Hair Dryer.png"
import CeilingFan from "../assets/image/Ceiling Fan.png"
import ElectricIron from "../assets/image/Electric Iron.png"
import VacuumCleaner from "../assets/image/Vacuum Cleaner.png"
const product = [
  {
    productName: 'Smartphone',
    productDescription: 'Latest 5G smartphone with 6.5-inch AMOLED display and 128GB storage',
    productImage: Smartphone,
    originalPrice: 50000,
    discountPrice: 5000,
    sellingPrice: 45000,
    quantity: 100,
    uom: 'pcs',
    hsnCode: '85171200'
  },
  {
    productName: 'Laptop',
    productDescription: 'High-performance laptop with Intel i7 processor and 16GB RAM',
    productImage: Laptop,
    originalPrice: 80000,
    discountPrice: 7000,
    sellingPrice: 73000,
    quantity: 50,
    uom: 'pcs',
    hsnCode: '84713010'
  },
  {
    productName: 'Smartwatch',
    productDescription: 'Water-resistant smartwatch with heart rate monitor and GPS',
    productImage: Smartwatch,
    originalPrice: 10000,
    discountPrice: 1000,
    sellingPrice: 9000,
    quantity: 200,
    uom: 'pcs',
    hsnCode: '85176290'
  },
  {
    productName: 'Wireless Earbuds',
    productDescription: 'Noise-cancelling wireless earbuds with 24-hour battery life',
    productImage: WirelessEarbuds,
    originalPrice: 5000,
    discountPrice: 500,
    sellingPrice: 4500,
    quantity: 300,
    uom: 'pcs',
    hsnCode: '85183000'
  },
  {
    productName: 'Smart TV',
    productDescription: '55-inch 4K Ultra HD Smart TV with built-in apps',
    productImage: SmartTV,
    originalPrice: 60000,
    discountPrice: 5000,
    sellingPrice: 55000,
    quantity: 80,
    uom: 'pcs',
    hsnCode: '85287200'
  },
  {
    productName: 'Bluetooth Speaker',
    productDescription: 'Portable Bluetooth speaker with deep bass and 12-hour battery life',
    productImage: BluetoothSpeaker,
    originalPrice: 7000,
    discountPrice: 800,
    sellingPrice: 6200,
    quantity: 150,
    uom: 'pcs',
    hsnCode: '85182900'
  },
  {
    productName: 'Gaming Console',
    productDescription: 'Next-gen gaming console with 8K resolution and 1TB storage',
    productImage: GamingConsole,
    originalPrice: 50000,
    discountPrice: 4000,
    sellingPrice: 46000,
    quantity: 60,
    uom: 'pcs',
    hsnCode: '95045000'
  },
  {
    productName: 'Air Purifier',
    productDescription: 'HEPA filter air purifier for large rooms, removes 99.97% of airborne particles',
    productImage: AirPurifier,
    originalPrice: 15000,
    discountPrice: 1200,
    sellingPrice: 13800,
    quantity: 90,
    uom: 'pcs',
    hsnCode: '84213990'
  },
  {
    productName: 'Smart Refrigerator',
    productDescription: '500L double-door smart refrigerator with touch display and energy-saving mode',
    productImage: SmartRefrigerator,
    originalPrice: 60000,
    discountPrice: 5000,
    sellingPrice: 55000,
    quantity: 30,
    uom: 'pcs',
    hsnCode: '84182100'
  },
  {
    productName: 'Electric Kettle',
    productDescription: '1.7L stainless steel electric kettle with automatic shut-off',
    productImage: ElectricKettle,
    originalPrice: 2000,
    discountPrice: 150,
    sellingPrice: 1850,
    quantity: 110,
    uom: 'pcs',
    hsnCode: '85167920'
  },
  {
    productName: 'Microwave Oven',
    productDescription: 'Convection microwave oven with grill',
    productImage: MicrowaveOven,
    originalPrice: 12000,
    discountPrice: 1000,
    sellingPrice: 11000,
    quantity: 40,
    uom: 'pcs',
    hsnCode: '85165000'
  },
  {
    productName: 'Smart Bulb',
    productDescription: 'Wi-Fi enabled smart LED bulb',
    productImage: SmartBulb,
    originalPrice: 1500,
    discountPrice: 200,
    sellingPrice: 1300,
    quantity: 150,
    uom: 'pcs',
    hsnCode: '85395200'
  },
  {
    productName: 'Electric Shaver',
    productDescription: 'Rechargeable electric shaver with precision blades',
    productImage: ElectricShaver,
    originalPrice: 3500,
    discountPrice: 400,
    sellingPrice: 3100,
    quantity: 100,
    uom: 'pcs',
    hsnCode: '85101000'
  },
  {
    productName: 'Coffee Maker',
    productDescription: '12-cup drip coffee maker with timer',
    productImage: CoffeeMaker,
    originalPrice: 6000,
    discountPrice: 600,
    sellingPrice: 5400,
    quantity: 60,
    uom: 'pcs',
    hsnCode: '85167100'
  },
  {
    productName: 'Hair Dryer',
    productDescription: '2000W professional hair dryer',
    productImage: HairDryer,
    originalPrice: 2500,
    discountPrice: 200,
    sellingPrice: 2300,
    quantity: 120,
    uom: 'pcs',
    hsnCode: '85163100'
  },
  {
    productName: 'Ceiling Fan',
    productDescription: '3-blade ceiling fan with remote control',
    productImage: CeilingFan,
    originalPrice: 4500,
    discountPrice: 500,
    sellingPrice: 4000,
    quantity: 90,
    uom: 'pcs',
    hsnCode: '84145190'
  },
  {
    productName: 'Electric Iron',
    productDescription: 'Non-stick electric iron with steam feature',
    productImage: ElectricIron,
    originalPrice: 2000,
    discountPrice: 150,
    sellingPrice: 1850,
    quantity: 110,
    uom: 'pcs',
    hsnCode: '85164000'
  },
  {
    productName: 'Vacuum Cleaner',
    productDescription: 'Bagless vacuum cleaner with powerful suction',
    productImage: VacuumCleaner,
    originalPrice: 7500,
    discountPrice: 500,
    sellingPrice: 7000,
    quantity: 50,
    uom: 'pcs',
    hsnCode: '85081900'
  }
]
export default product