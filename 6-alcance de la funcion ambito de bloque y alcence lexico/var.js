// Si declaras una variable con var, tiene alcance de función:

function test() {
  if (true) {
    if (true) {
      if (true) {
        if (true) {
          if (true) {
            if (true) {
              if (true) {
                if (true) {
                  if (true) {
                    if (true) {
                      if (true) {
                        if (true) {
                          var x = 10;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  console.log(x);
}

// console.log(x);//error
test();
