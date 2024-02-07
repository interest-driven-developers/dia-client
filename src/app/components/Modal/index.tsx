"use client";
import React, { useState } from "react";
import { ModalBody } from "./ui/ModalBody";
import { ModalButton } from "./ui/ModalButton";
import { ModalHeader } from "./ui/ModalHeader";
import { ModalMain } from "./ui/ModalMain";

export const Modal = Object.assign(ModalMain, {
  Body: ModalBody,
  Button: ModalButton,
  Header: ModalHeader,
});
