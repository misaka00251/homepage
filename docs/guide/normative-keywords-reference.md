---
id: normative-keywords-reference
title: Normative Keywords Reference
description: This document defines normative keywords and their meanings.
slug: /guide/normative-keywords-reference
---

# Normative Keywords Reference

## MUST / REQUIRED / SHALL

MUST, REQUIRED, or SHALL means that the definition is an absolute requirement of the specification.

## MUST NOT / SHALL NOT

MUST NOT or SHALL NOT means that the definition is an absolute prohibition of the specification.

## SHOULD / RECOMMENDED

SHOULD or RECOMMENDED means that there may exist valid reasons in particular circumstances to ignore a particular item, but the full implications must be understood and carefully weighed before choosing a different course.

## SHOULD NOT / NOT RECOMMENDED

SHOULD NOT or NOT RECOMMENDED means that there may exist valid reasons in particular circumstances when the particular behavior is acceptable, or even useful, but the full implications should be understood and the case carefully weighed before implementing any behavior described with this label.

## MAY / OPTIONAL

MAY or OPTIONAL means that an item is truly optional. One vendor may choose to include the item because a particular marketplace requires it or because the vendor believes it enhances the product, while another vendor may omit the same item.

An implementation that does not include a particular option MUST be prepared to interoperate with another implementation that does include the option, although possibly with reduced functionality. Likewise, an implementation that does include a particular option MUST be prepared to interoperate with another implementation that does not include the option, except, of course, for the specific feature that the option provides.

## Guidance on the Use of These Imperatives

Imperatives of the type defined in this memo must be used carefully and sparingly. In particular, they MUST be used only where they are actually required for interoperability or to limit behavior that has the potential to cause harm, such as limiting retransmissions.

For example, such terms must not be used merely to impose a particular method on implementers when that method is not required for interoperability.

## Security Considerations

These terms are frequently used to specify behavior with security implications. The security impact of not implementing a MUST or SHOULD, or of doing something the specification says MUST NOT or SHOULD NOT be done, may be very subtle.

Document authors should take the time to explain the security implications of not following such recommendations or requirements, since most implementers will not have had the benefit of the experience and discussion that produced the specification.

# Acknowledgments

This document is based on [RFC 2119](https://www.rfc-editor.org/rfc/rfc2119.html), *Key Words for Use in RFCs to Indicate Requirement Levels*, published as BCP 14 in March 1997.

Scott Bradner of Harvard University authored the original RFC. The definitions of these terms combine those extracted by previous authors from multiple RFCs. In addition, the original document incorporates suggestions from several people, including Robert Ullmann, Thomas Narten, Neal McBurnett, and Robert Elz.

This adapted version is provided for documentation and reference purposes.
