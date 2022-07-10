import {
  Style,
  List,
  Shape,
  TextInput,
  TextArea,
  Color,
  Image,
} from "@makeswift/runtime/controls";
import { ReactRuntime } from "@makeswift/runtime/react";
import GlowCard from "../../components/GlowCard/GlowCard";

// Register your components here!

function HelloWorld(props: { className?: string }) {
  return <p {...props}>Hello, world!</p>;
}

ReactRuntime.registerComponent(HelloWorld, {
  type: "hello-world",
  label: "Hello, world!",
  props: {
    className: Style({ properties: Style.All }),
  },
});

ReactRuntime.registerComponent(GlowCard, {
  type: "glowcard",
  label: "GlowCard",
  props: {
    className: Style({ properties: Style.All }),
    pictureUrl: Image({ label: "Profile Picture" }),
  },
});
