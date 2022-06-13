use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn mul(a: u32, b: u32) -> u32 {
    a + b
}
