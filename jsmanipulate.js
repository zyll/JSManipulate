/* 
=========================================================================
   JSManipulate v1.0 (2011-08-01)

Javascript image filter & effect library

Developed by Joel Besada (http://www.joelb.me)
Demo page: http://www.joelb.me/jsmanipulate

MIT LICENSED (http://www.opensource.org/licenses/mit-license.php)
Copyright (c) 2011, Joel Besada
=========================================================================
*/
import BlurFilter from "./filters/blur"
import BrightnessFilter from "./filters/brightness"
import BumpFilter from "./filters/bump"
import CircleSmearFilter from "./filters/circlesmear"
import ContrastFilter from "./filters/contrast"
import CrossSmearFilter from "./filters/crosssmear"
import DiffusionFilter from "./filters/diffusion"
import DitherFilter from "./filters/dither"
import EdgeFilter from "./filters/edge"
import EmbossFilter from "./filters/emboss"
import ExposureFilter from "./filters/exposure"
import GainFilter from "./filters/gain"
import GammaFilter from "./filters/gamma"
import GrayscaleFilter from "./filters/grayscale"
import HueFilter from "./filters/hue"
import InvertFilter from "./filters/invert"
import KaleidoscopeFilter from "./filters/kaleidoscope"
import LensDistortionFilter from "./filters/lensdistortion"
import LineSmearFilter from "./filters/linesmear"
import MaximumFilter from "./filters/maximum"
import MedianFilter from "./filters/median"
import MinimumFilter from "./filters/minimum"
import NoiseFilter from "./filters/noise"
import OilFilter from "./filters/oil"
import OpacityFilter from "./filters/opacity"
import PinchFilter from "./filters/pinch"
import PixelationFilter from "./filters/pixelation"
import PosterizeFilter from "./filters/posterize"
import RGBAdjustFilter from "./filters/rgbadjust"
import SaturationFilter from "./filters/saturation"
import SawtoothRippleFilter from "./filters/sawtoothripple"
import SepiaFilter from "./filters/sepia"
import SharpenFilter from "./filters/sharpen"
import SineRippleFilter from "./filters/sineripple"
import SolarizeFilter from "./filters/solarize"
import SparkleFilter from "./filters/sparkle"
import SquareSmearFilter from "./filters/squaresmear"
import ThresholdFilter from "./filters/threshold"
import TriangleRippleFilter from "./filters/triangleripple"
import TwirlFilter from "./filters/twirl"
import VignetteFilter from "./filters/vignette"
import WaterRippleFilter from "./filters/waterripple"

export default {
	blur : new BlurFilter(),
	brightness : new BrightnessFilter(),
	bump : new BumpFilter(),
	circlesmear : new CircleSmearFilter(),
	contrast : new ContrastFilter(),
	crosssmear : new CrossSmearFilter(),
	diffusion : new DiffusionFilter(),
	dither : new DitherFilter(),
	edge : new EdgeFilter(),
	emboss : new EmbossFilter(),
	exposure : new ExposureFilter(),
	gain : new GainFilter(),
	gamma : new GammaFilter(),
	grayscale : new GrayscaleFilter(),
	hue : new HueFilter(),
	invert : new InvertFilter(),
	kaleidoscope : new KaleidoscopeFilter(),
	lensdistortion : new LensDistortionFilter(),
	linesmear : new LineSmearFilter(),
	maximum : new MaximumFilter(),
	median : new MedianFilter(),
	minimum : new MinimumFilter(),
	noise : new NoiseFilter(),
	oil : new OilFilter(),
	opacity : new OpacityFilter(),
	pinch : new PinchFilter(),
	pixelate : new PixelationFilter(),
	posterize : new PosterizeFilter(),
	rgbadjust : new RGBAdjustFilter(),
	saturation : new SaturationFilter(),
	sawtoothripple : new SawtoothRippleFilter(),
	sepia : new SepiaFilter(),
	sharpen : new SharpenFilter(),
	sineripple : new SineRippleFilter(),
	solarize : new SolarizeFilter(),
	sparkle : new SparkleFilter(),
	squaresmear : new SquareSmearFilter(),
	threshold : new ThresholdFilter(),
	triangleripple : new TriangleRippleFilter(),
	twirl : new TwirlFilter(),
	vignette : new VignetteFilter(),
	waterripple : new WaterRippleFilter()
};
