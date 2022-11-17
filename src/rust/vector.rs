use wasm_bindgen::prelude::*;

macro_rules! log {
    ( $( $t:tt )* ) => {
        web_sys::console::log_1(&format!( $( $t )* ).into());
    }
}

#[wasm_bindgen]
pub fn test_vector() {
    log!("in main!");
    let n = 131072;
    let p = 38;
    let _s = vec![vec![1usize; n]; p];
    log!("vector allocated");
}
